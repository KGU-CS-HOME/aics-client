import React from 'react'
import { cn, withRef } from '@udecode/cn'
import { PlateElement, useElement } from '@udecode/plate-common'
import { TLinkElement, useLink } from '@udecode/plate-link'

export const LinkElement: ReturnType<typeof withRef<typeof PlateElement>> =
  withRef<typeof PlateElement>(({ className, children, ...props }, ref) => {
    const element = useElement<TLinkElement>()
    const { props: linkProps } = useLink({ element })

    return (
      <PlateElement
        ref={ref}
        asChild
        className={cn(
          'text-primary decoration-primary font-medium underline underline-offset-4',
          className,
        )}
        {...(linkProps as any)}
        {...props}
      >
        <a>{children}</a>
      </PlateElement>
    )
  })
