import { useRouter } from 'next/router';

export default function ClientProjects() {
    const router = useRouter();

    function loadProjectHandler() {
        // load data ................
        router.push('/clients/max/projectA')
    }

    return (
        <div>
            <h1>All projects of given client</h1>
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    )
}