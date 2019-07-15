import React from 'react'
import Link from 'next/link'
import Button from '@material-ui/core/Button';

const App = () => (
    <Link href="/a"><Button variant="contained" color="primary">
        Hello World
    </Button></Link>
);
export default App;