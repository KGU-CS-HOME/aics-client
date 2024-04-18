'use client'

import React from 'react'
import { withRef } from '@udecode/cn'
import { PlateElement } from '@udecode/plate-common'

export const CodeLineElement: ReturnType<typeof withRef<typeof PlateElement>> =
  withRef<typeof PlateElement>((props, ref) => (
    <PlateElement ref={ref} {...props} />
  ))
