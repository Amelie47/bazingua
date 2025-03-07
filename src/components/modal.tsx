'use client'

import { ReactNode, useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'

type ModalProps = {
  action: ReactNode,
  content: ReactNode
}

export default function Modal(props: ModalProps) {
  const [open, setOpen] = useState(true)

  return (
    <>
      <div onClick={() => setOpen(true)}>{props.action}</div>

      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-900/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-start justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative w-full transform overflow-hidden transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className='relative flex flex-col bg-gray-100 w-full rounded-2xl shadow-inner-sm no-noise p-8'>
                <button
                  type="button"
                  className='fixed top-2 right-4 '
                  onClick={() => setOpen(false)}
                >
                  x
                </button>

                {props.content}

              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}
