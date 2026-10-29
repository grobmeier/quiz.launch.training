import { notFound } from 'next/navigation';
import Link from 'next/link';
import { stations, lab } from '../../content/index.mjs';
import { LabToolbar, Resources, StationBody, StationNav } from '../../ui/LabPages';
import styles from '../../ui/labs.module.scss';
export const dynamicParams = false;
export function generateStaticParams() { return stations.map(({ id }) => ({ station: id })); }
export async function generateMetadata({ params }) {
  const { station } = await params;
  const entry = stations.find((s) => s.id === station);
  return { title: `${entry?.title || 'Station'} | Launch Training Labs` };
}
export default async function Page({ params }) {
  const { station } = await params;
  const entry = stations.find((s) => s.id === station);
  if (!entry) notFound();
  return <main id="main-content" className={styles.main}><Link href="/labs/artemis-messaging/">← {lab.title}</Link><LabToolbar /><StationBody station={entry} /><StationNav station={entry} /><Resources /></main>;
}
