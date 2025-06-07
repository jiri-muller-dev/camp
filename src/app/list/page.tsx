'use client'

import React from 'react'
import { db } from '../firebase'
import { collection, DocumentData, getDocs } from 'firebase/firestore'
import { format } from 'date-fns'
import { Timestamp } from 'firebase/firestore'

const RegistarationsList = () => {
  const [documents, setDocuments] = React.useState<Document[]>([])
  const [loading, setLoading] = React.useState<boolean>(true)
  const [error, setError] = React.useState<string | null>(null)

  interface Document {
    id: string
    [key: string]: string
  }

  React.useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'attendees'))
        const docs: Document[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as DocumentData), // Cast to DocumentData
        }))
        setDocuments(docs)
      } catch (err) {
        setError((err as Error).message)
      } finally {
        setLoading(false)
      }
    }

    fetchDocuments()
  }, [])

  if (loading) {
    return (
      <main className="flex flex-col items-center">
        <div className="max-w-screen-md p-6 font-mono">Loading...</div>
      </main>
    )
  }

  if (error) {
    return (
      <main className="flex flex-col items-center">
        <div className="max-w-screen-md p-6 font-mono">Error: {error}</div>
      </main>
    )
  }

  return (
    <main className="flex flex-col items-center">
      <div className="mt-4 max-w-screen-md bg-white p-6 font-mono">
        <h2>List of registrations:</h2>
        <section>
          {documents.map((doc) => {
            return (
              <article
                key={doc.id}
                className="mb-2 rounded border-2 border-gray-300 p-1 break-all"
              >
                <strong>{doc.fullname}</strong>
                <br />
                Date of birth: {String(doc.dateofbirth)}
                <br />
                Phone number: {String(doc.phonenumber)}
                <br />
                E-mail: {String(doc.email)}
                <br />
                {/* TODO: format registration date
                <code className="block text-sm">
                  Registration date: {String(new Date(doc.timestamp))}
                </code>*/}
                <code className="block text-sm">Registration ID: {doc.id}</code>
              </article>
            )
          })}
        </section>
      </div>
    </main>
  )
}

export default RegistarationsList
