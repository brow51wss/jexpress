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
  const iconSize = size === 'sm' ? 14 : 17
  const btnBase = size === 'sm' ? 'w-7 h-7' : 'w-9 h-9'

  const defaultIcon =
    variant === 'dark' ? 'text-white/70 group-hover:text-white' : 'text-[#6b6b6b] group-hover:text-white'
  const defaultBg =
    variant === 'dark' ? 'bg-white/10 hover:bg-[#d4a53a]' : 'bg-[#f5f5f5] hover:bg-[#d4a53a]'

  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(url)
    } catch {
      const textarea = document.createElement('textarea')
      textarea.value = url
      textarea.setAttribute('readonly', '')
      textarea.style.position = 'absolute'
      textarea.style.left = '-9999px'
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
    }

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
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`

    // iOS intercepts facebook.com links and opens the app without the share URL.
    // Web Share API passes the link correctly when the user picks Facebook.
    if (isIOS() && typeof navigator.share === 'function') {
      try {
        await navigator.share({ url, title })
        return
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') return
      }
    }

    if (isIOS()) {
      openInNewTab(`https://m.facebook.com/sharer.php?u=${encodeURIComponent(url)}`)
      return
    }

    window.open(facebookShareUrl, '_blank', 'noopener,noreferrer,width=600,height=400')
  }

  const shareLinks = [
    {
      label: 'Share on Facebook',
      Icon: RiFacebookFill,
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
      {shareLinks.map(({ label, Icon, action }) => (
        <button
          key={label}
          type="button"
          aria-label={label}
          onClick={(e) => {
            e.stopPropagation()
            e.preventDefault()
            action()
          }}
          className={`${btnBase} rounded-full ${defaultBg} flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 group flex-shrink-0`}
        >
          <Icon size={iconSize} className={`${defaultIcon} transition-colors duration-200`} />
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
