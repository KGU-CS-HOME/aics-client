'use client'

import React from 'react'
import { withRef } from '@udecode/cn'
import { useCodeSyntaxLeaf } from '@udecode/plate-code-block'
import { PlateLeaf } from '@udecode/plate-common'

export const CodeSyntaxLeaf: ReturnType<typeof withRef<typeof PlateLeaf>> =
  withRef<typeof PlateLeaf>(({ children, ...props }, ref) => {
    const { leaf } = props

    const { tokenProps } = useCodeSyntaxLeaf({ leaf })

    return (
      <PlateLeaf ref={ref} {...props}>
        <span {...tokenProps}>{children}</span>
      </PlateLeaf>
    )
  })
