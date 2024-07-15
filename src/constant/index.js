import john from "../assets/john.jpg";
import evelyn from "../assets/Evelyn.jpg";
import sarah from "../assets/sarah.jpg";
import james from "../assets/logo.jpg";
import {BsBookmark} from "react-icons/bs";
import {BsPerson} from "react-icons/bs";
import {FiSettings} from "react-icons/fi";
import {GiNightSleep} from "react-icons/gi";
import {MdAnimation} from "react-icons/md";
import {AiOutlineQuestionCircle} from "react-icons/ai";
import {BiBug} from 'react-icons/bi';
import SwitchButton from "../component/SwitchButton";

export const chatlist =
[
    {key:1,image:john,username:"John doe",message:"Hey , there",lastmessage:"15:14",notification:0},
    {key:2,image:sarah,username:"Sarah",message:"Morning",lastmessage:"Jun 14",notification:44},
    {key:3,image:evelyn,username:"evelyn",message:"Night",lastmessage:"Feb 23",notification:2},
    {key:4,image:james,username:"James",message:"Going out ?",lastmessage:"Jul 2,2022",notification:398},
     {key:5,image:"",username:"Kevin",message:"See ya",lastmessage:"Apr 16,2022",notification:1},
    // {key:6,image:"",username:"Alaysa",message:"Good luck",lastmessage:"Feb 5,2022",notification:33},
    // {key:7,image:"",username:"Barry Allen",message:"wait what ?",lastmessage:"Jan 1,2020",notification:33},
]

export const navbar=[
    {key:1,icon:<BsBookmark/>,text:"Saved Messages",},
    {key:2,icon:<BsPerson/>,text:"Contacts",},
    {key:3,icon:<FiSettings/>,text:"Settings"},
    {key:4,icon:<GiNightSleep/>,text:"Night Mode",toggleButton:<SwitchButton/>},
    {key:5,icon:<MdAnimation/>,text:"Animations",toggleButton:<SwitchButton/>},
    {key:6,icon:<AiOutlineQuestionCircle/>,text:"Telegram Features"},
    {key:7,icon:<BiBug/>,text:"Report Bug"},
    // {key:8,icon:<div><p>K</p></div>,text:"Switch to K Version",},

]