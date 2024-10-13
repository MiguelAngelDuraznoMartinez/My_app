import axios from "axios";
async function getUsuario(id) {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const usuario = await axios.get(url);
    return usuario.data;
}

export default async function Usuario({ params }) {
    const { id } = params;
    const usuario = await getUsuario(id);

    return (
        <>
            <h1>Usuario {usuario.id}</h1>
            <h2>Address</h2>
            <table className="table">
                <thead >
                    <tr>
                        <th>Street</th>
                        <th>Suite</th>
                        <th>City</th>
                        <th>Zipcode</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{usuario.address.street}</td>
                        <td>{usuario.address.suite}</td>
                        <td>{usuario.address.city}</td>
                        <td>{usuario.address.zipcode}</td>
                    </tr>
                </tbody>
            </table>

            <h2>Geografía y Contacto</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Lat</th>
                        <th>Lng</th>
                        <th>Phone</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{usuario.address.geo.lat}</td>
                        <td>{usuario.address.geo.lng}</td>
                        <td>{usuario.phone}</td>
                        <td>{usuario.website}</td>
                    </tr>
                </tbody>
            </table>

            <h2>Company</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>CatchPhrase</th>
                        <th>bs</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{usuario.company.name}</td>
                        <td>{usuario.company.catchPhrase}</td>
                        <td>{usuario.company.bs}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}
