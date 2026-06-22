'use client'

import { useState } from 'react'
import {
  RiFacebookFill,
  RiTwitterXFill,
  RiLinkedinFill,
  RiMailFill,
  RiFileCopyLine,
  RiCheckLine,
} from 'react-icons/ri'

interface PostShareBarProps {
  url: string
  title: string
  /** 'sm' for cards, 'md' for post pages */
  size?: 'sm' | 'md'
  /** 'light' for white-bg contexts; 'dark' for the banner overlay */
  variant?: 'light' | 'dark'
}

export default function PostShareBar({
  url,
  title,
  size = 'md',
  variant = 'light',
}: PostShareBarProps) {
  const [copied, setCopied] = useState(false)
  const [facebookCopied, setFacebookCopied] = useState(false)
  const iconSize = size === 'sm' ? 14 : 17
  const btnBase = size === 'sm' ? 'w-7 h-7' : 'w-9 h-9'

  const defaultIcon =
    variant === 'dark' ? 'text-white/70 group-hover:text-white' : 'text-[#6b6b6b] group-hover:text-white'
  const defaultBg =
    variant === 'dark' ? 'bg-white/10 hover:bg-[#d4a53a]' : 'bg-[#f5f5f5] hover:bg-[#d4a53a]'

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      const textarea = document.createElement('textarea')
      textarea.value = text
      textarea.setAttribute('readonly', '')
      textarea.style.position = 'absolute'
      textarea.style.left = '-9999px'
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
    }
  }

  const copyUrl = async () => {
    await copyToClipboard(url)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }

  const isIOS = () => {
    if (typeof navigator === 'undefined') return false
    return (
      /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
    )
  }

  const openInNewTab = (href: string) => {
    const link = document.createElement('a')
    link.href = href
    link.target = '_blank'
    link.rel = 'noopener noreferrer'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const shareOnFacebook = async () => {
    const encodedPostUrl = encodeURIComponent(url)
    const encodedRedirect = encodeURIComponent(url)
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedPostUrl}`
    const facebookAppId = process.env.NEXT_PUBLIC_FACEBOOK_APP_ID

    // Meta Share Dialog — most reliable path on iOS when a Facebook App ID is configured
    if (facebookAppId) {
      const dialogUrl = `https://www.facebook.com/dialog/share?app_id=${facebookAppId}&href=${encodedPostUrl}&redirect_uri=${encodedRedirect}&display=popup`
      openInNewTab(dialogUrl)
      return
    }

    if (isIOS()) {
      // fb:// deep links are unreliable on current Facebook iOS (often opens feed only).
      // Copy the URL first, then open the mobile web sharer so OG can load in Safari.
      // If iOS still hands off to the app without the share dialog, the user can paste.
      await copyToClipboard(url)
      setFacebookCopied(true)
      window.setTimeout(() => setFacebookCopied(false), 2500)
      openInNewTab(`https://m.facebook.com/sharer.php?u=${encodedPostUrl}`)
      return
    }

    window.open(facebookShareUrl, '_blank', 'noopener,noreferrer,width=600,height=400')
  }

  const shareLinks = [
    {
      label: 'Share on Facebook',
      copiedLabel: 'Link copied — paste in Facebook if needed',
      Icon: RiFacebookFill,
      CheckIcon: RiCheckLine,
      showCopied: facebookCopied,
      action: () => {
        void shareOnFacebook()
      },
    },
    {
      label: 'Share on X',
      Icon: RiTwitterXFill,
      action: () =>
        window.open(
          `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
          '_blank',
          'noopener,noreferrer,width=600,height=400'
        ),
    },
    {
      label: 'Share on LinkedIn',
      Icon: RiLinkedinFill,
      action: () =>
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
          '_blank',
          'noopener,noreferrer,width=600,height=600'
        ),
    },
    {
      label: 'Share via Email',
      Icon: RiMailFill,
      action: () => {
        window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`
      },
    },
  ]

  return (
    <div
      className={`flex items-center ${size === 'sm' ? 'gap-1.5' : 'gap-2'}`}
      onClick={(e) => e.stopPropagation()}
    >
      {shareLinks.map(({ label, copiedLabel, Icon, CheckIcon, showCopied, action }) => (
        <button
          key={label}
          type="button"
          aria-label={showCopied && copiedLabel ? copiedLabel : label}
          onClick={(e) => {
            e.stopPropagation()
            e.preventDefault()
            action()
          }}
          className={`${btnBase} rounded-full ${
            showCopied ? 'bg-[#d4a53a]' : defaultBg
          } flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 group flex-shrink-0`}
        >
          {showCopied && CheckIcon ? (
            <CheckIcon size={iconSize} className="text-white" />
          ) : (
            <Icon size={iconSize} className={`${defaultIcon} transition-colors duration-200`} />
          )}
        </button>
      ))}

      <button
        type="button"
        aria-label={copied ? 'Link copied' : 'Copy link'}
        onClick={(e) => {
          e.stopPropagation()
          e.preventDefault()
          void copyUrl()
        }}
        className={`${btnBase} rounded-full ${
          copied ? 'bg-[#d4a53a]' : defaultBg
        } flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 group flex-shrink-0`}
      >
        {copied ? (
          <RiCheckLine size={iconSize} className="text-white" />
        ) : (
          <RiFileCopyLine size={iconSize} className={`${defaultIcon} transition-colors duration-200`} />
        )}
      </button>
    </div>
  )
}
