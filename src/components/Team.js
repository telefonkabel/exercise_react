import Pokemon from "./Pokemon";

const Team = (props) => {
    const {team} = props;

    return (
        <div>
            <h3>Team:</h3>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)'}}>
                {team.map((pokemon) => (
                    <div key={pokemon.id}>
                        <Pokemon name={pokemon.name}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;