'use client'

import { useEffect, useRef, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@repo/ui/components/ui/tabs'
import { CURRICULUMS } from '../data/curriculums'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString()

function CurriculumViewer() {
  const pdfWrapper = useRef<HTMLDivElement>(null)
  const [pdfWidth, setPdfWidth] = useState<number>()
  const [numPages, setNumPages] = useState<number>()

  useEffect(() => {
    window.addEventListener('resize', () => {
      setPdfWidth(pdfWrapper.current?.offsetWidth)
    })

    return () => {
      window.removeEventListener('resize', () => {
        setPdfWidth(pdfWrapper.current?.offsetWidth)
      })
    }
  })

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setPdfWidth(pdfWrapper.current?.offsetWidth)
    setNumPages(numPages)
  }

  return (
    <Tabs defaultValue="2023">
      <TabsList className="grid h-full w-full grid-cols-3">
        {CURRICULUMS.map((curriculum) => (
          <TabsTrigger
            key={`curriculum-${curriculum.id}`}
            value={curriculum.year.toString()}
            className="py-2"
          >
            {curriculum.year}년
          </TabsTrigger>
        ))}
      </TabsList>
      <div ref={pdfWrapper}>
        {CURRICULUMS.map((curriculum) => (
          <TabsContent
            key={`pdf-${curriculum.id}`}
            value={curriculum.year.toString()}
          >
            <Document
              file={curriculum.filePath}
              onLoadSuccess={onDocumentLoadSuccess}
              loading=""
            >
              {numPages &&
                Array.from({ length: numPages }).map((_, index) => (
                  <Page
                    key={index}
                    pageIndex={index}
                    width={pdfWidth}
                    loading=""
                  />
                ))}
            </Document>
          </TabsContent>
        ))}
      </div>
    </Tabs>
  )
}

export { CurriculumViewer }
