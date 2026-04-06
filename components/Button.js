import Link from 'next/link'

export default function Button({
  href,
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  type = 'button',
  disabled = false,
  className = '',
}) {
  const base =
    'inline-flex items-center justify-center font-sans tracking-widest uppercase text-sm transition-all duration-200 rounded-sm'

  const variants = {
    primary: 'bg-wood text-white hover:bg-bark',
    secondary: 'border border-wood text-wood hover:bg-wood hover:text-white',
    light: 'bg-white text-bark hover:bg-sand',
    'light-outline': 'border border-white text-white hover:bg-white hover:text-bark',
  }

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3',
    lg: 'px-8 py-4',
  }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  } ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
