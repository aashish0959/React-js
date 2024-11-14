import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebaseConfig';


export default function Dashboard() {
    const auth = getAuth();
    const navigate = useNavigate();

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            navigate('/signin');
        } catch (error) {
            alert(`Sign out failed: ${error.message}`);
        }
    };

    return (
        <Box display="flex" flexDirection="column" alignItems="center" marginTop={5}>
            <Typography variant="h4">Dashboard</Typography>
            <Typography variant="subtitle1" mt={2}>Welcome</Typography>
            <Button variant="contained" color="secondary" onClick={handleSignOut} sx={{ mt: 2 }}>
                Sign Out
            </Button>
        </Box>
    );
}
