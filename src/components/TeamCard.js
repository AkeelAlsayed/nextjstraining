import Link from 'next/link';

export default function TeamCard({ team }) {
  return (
    <div className="bg-white border rounded shadow p-4">
      <h2 className="text-xl font-bold mb-2">{team.name}</h2>
      <p className="text-gray-600 mb-2">Founded: {team.founded}</p>
      <p className="text-gray-600 mb-2">Stadium: {team.stadium}</p>
      <p className="text-gray-600">Manager: {team.manager}</p>
      <Link href={`/team/${team.id}`}>
        <a className="text-blue-500 hover:underline">View Details</a>
      </Link>
    </div>
  );
}
