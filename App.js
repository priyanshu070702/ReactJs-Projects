import './App.css';
import { ResponsiveContainer, LineChart, Line,XAxis,
  YAxis,CartesianGrid,Legend,BarChart,Bar} from 'recharts';

const pdata = [
  {
    name: 'Python',
    student: 103,
    fees: 10
  },{
    name: 'Javascript',
    student: 15,
    fees: 12
  },{
    name: 'Java',
    student: 17,
    fees: 10
  },{
    name: 'css',
    student: 10,
    fees: 1
  },{
    name: 'c++',
    student: 105,
    fees: 120
  },{
    name: 'csharp',
    student: 19,
    fees: 22
  },{
    name: 'linux',
    student: 10,
    fees: 12
  },{
    name: 'asuri',
    student: 2,
    fees: 17
  },{
    name: 'ruby',
    student: 98,
    fees:44
  },
];

function App() {
  return (
    <>
    <h1 className="chart-heading">Line Chart</h1>
    <ResponsiveContainer width="100%" aspect={4} >
       <LineChart data={pdata} width={500}height={300}
       margin={{top:5,right:50,left:20,bottom:5}}>
        <CartesianGrid/>
        <XAxis dataKey="name" interval={'preserveStartEnd'}/>
        <YAxis dataKey="fees"/>
        <Legend/>
         <Line dataKey="student" stroke="red"/>
         <Line dataKey="fees"/>
       </LineChart>
    </ResponsiveContainer>
    <br/>
    <ResponsiveContainer width="100%" aspect={4} >
       <BarChart data={pdata} width={500}height={300}
       margin={{top:5,right:50,left:20,bottom:5}}>
        <CartesianGrid/>
        <XAxis dataKey="name" interval={'preserveStartEnd'}/>
        <YAxis dataKey="fees"/>
        <Legend/>
         <Bar dataKey="student" stroke="red"/>
         <Bar dataKey="fees"/>
       </BarChart>
    </ResponsiveContainer>
    </>
    
  );
}

export default App;
