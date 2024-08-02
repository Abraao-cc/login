import food from '../../assets/images/food-1.jpg';
import ReactPlayer from "react-player";
import MyVideo from '../../components/MyVideo';
const randomImageUrl = "https://picsum.photos/400/265";
function Home() {
    const vidUrl ="https://www.facebook.com/meioemensagem/videos/o-que-o-facebook-quer-com-o-reels-ferramenta-de-v%C3%ADdeos-curtos-%C3%A9-uma-oportunidade/2189153051242399/";
    return(
            <>
            <h>Home</h>           
          
            
            <img src={food} height={200} alt= "Food saudável!!"/>
            <img src={require("../../assets/images/food-2.jpg")} height={200} alt= "Food 2 saudável!!"/>
            <img src={randomImageUrl} height={200} alt= "Random"/>
           
            <MyVideo />
            <ReactPlayer
            url={vidUrl}
            playing={false}
            volume={0.5}
            />
            </>
            );
}
;

export default Home;