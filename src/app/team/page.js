import TeamCard from '../../components/TeamCard';

const teams = [
  {
    id: 1,
    name: 'Team A',
    founded: '1900',
    stadium: 'Stadium A',
    manager: 'Manager A'
  },
  {
    id: 2,
    name: 'Team B',
    founded: '1920',
    stadium: 'Stadium B',
    manager: 'Manager B'
  },
  {
    id: 3,
    name: 'Team C',
    founded: '1950',
    stadium: 'Stadium C',
    manager: 'Manager C'
  }
];

export default function TeamsPage() {
  return (
    <main className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center">Football Teams</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {teams.map(team => (
          <TeamCard key={team.id} team={team} />
        ))}
      </div>
    </main>
  );
}
