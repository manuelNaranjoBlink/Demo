import { DomainProvider } from "@/contexts/DomainProvider";
import { LibraryProvider } from "@/contexts/LibrariesProvider";
import dynamic from "next/dynamic";

export default async () => {

  const res = await fetch('http://demo7540337.mockable.io/saopaulo');
  const domain = await (res.json())
  const domainToLoad = domain.filter(module => module.active)[0]?.domain;
  const Component = dynamic(() => import(`./domain/${domainToLoad}`, { ssr: false }))

  return (
    <main className="">
      <DomainProvider domain={domainToLoad}>
        <LibraryProvider>
          <Component />
        </LibraryProvider>
      </DomainProvider>
    </main>
  );
}