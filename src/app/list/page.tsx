"use client";

import React from "react";
import { db } from "../firebase";
import { collection, DocumentData, getDocs } from "firebase/firestore";

const RegistarationsList = () => {
  const [documents, setDocuments] = React.useState<Document[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  interface Document {
    id: string;
    // Define other fields based on your Firestore document structure
    name?: string;
  }

  React.useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "attendees"));
        const docs: Document[] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as DocumentData), // Cast to DocumentData
        }));
        setDocuments(docs);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchDocuments();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <main className="flex flex-col items-center">
      <div className="font-mono p-6 max-w-screen-md">
        <h2>List of registrations:</h2>
        <ul>
          {documents.map((doc) => (
            <li key={doc.id} className="border-b-gray-300 border-b-2">
              <strong>ID:</strong> {doc.id} <br />
              <strong>Data:</strong> {JSON.stringify(doc)}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default RegistarationsList;
