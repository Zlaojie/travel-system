import { Layout, Carousel } from 'antd';
import './App.css';
const { Content, Header, Footer } = Layout;

function App() {
  const contentStyle = {
    height: 'calc(100vh - 100px)',
    background: '#364d79',
    width: '100%'
  };
  return (
    
      <Layout id="page-layout">
      <Header id="page-header">xx的旅馆预订信息系统</Header>
      <Content id="page-content">
      <Carousel autoplay>
    <div>
      <h3><img style={contentStyle} src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fx0.ifengimg.com%2Fres%2F2021%2FC20679D9BBB34DDDCBA7DDB188303955744695D8_size49_w555_h421.jpeg&refer=http%3A%2F%2Fx0.ifengimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634993131&t=3a31105b3fda4c6ed6e0135842314a9d" alt='logo'/></h3>
    </div>
    <div>
    <h3><img style={contentStyle} src="https://img1.baidu.com/it/u=1364480506,999615616&fm=26&fmt=auto" alt='logo'/></h3>
    </div>
    <div>
    <h3><img style={contentStyle} src="https://img1.baidu.com/it/u=2160355146,225002274&fm=26&fmt=auto" alt='logo'/></h3>
    </div>
    <div>
    <h3><img style={contentStyle} src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.3dkezhan.com%2Fuploadfiles%2Fuploadfiles%2Fimage%2F2014%2F03-12%2F20140312140004_71751.jpg&refer=http%3A%2F%2Fwww.3dkezhan.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634993236&t=c0ea63bc25eed7d09b2108ede2dd802f" alt='logo'/></h3>
    </div>
  </Carousel>
      </Content>
      {/* <Footer id="page-footer">Footer</Footer> */}
    </Layout>
  );
}

export default App;
