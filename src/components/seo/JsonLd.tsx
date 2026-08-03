/**
 * Inietta un blocco di dati strutturati. Server component: il JSON finisce
 * nell'HTML statico, quindi è visibile ai crawler che non eseguono JS.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
