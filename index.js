import { express, cors, dotenv, fs} from './dependencies.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();
const PORT = process.env.PORT;
const app = express();
const STATIC_APP = express.static('./static/client-app');
app.use(express.json());
app.use('/app', STATIC_APP);
app.use('/user', userRoutes);



app.listen(PORT, () => {
    console.log(`localhost:${PORT}`);
});