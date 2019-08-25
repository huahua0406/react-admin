import React, { Component } from 'react';
import { Row, Col, Card, Modal, PageHeader } from 'antd';

class GalleryDemo extends Component {
    state = {
        imgArr: [],
        visible: false
    };

    async componentDidMount() {
        const result = await Api.getImgList();
        let arr = result.data.results;
        let tempArr = [];
        tempArr[0] = arr.slice(0, 5);
        tempArr[1] = arr.slice(6, 10);
        tempArr[2] = arr.slice(11, 15);
        tempArr[3] = arr.slice(16, 20);
        tempArr[4] = arr.slice(21, 25);
        this.setState({
            imgArr: tempArr
        });
    }

    openGallery = (imgSrc)=>{
        this.setState({
            visible:true,
            currentImg: imgSrc
        })
    }

    render() {
        const imgArr = this.state.imgArr;
        const imgList = imgArr.map(list =>
            list.map((item, index) => (
                <Card
                    style={{ marginBottom: 10 }}
                    key={index}
                    cover={
                        <img
                            src={item.url}
                            onClick={() => this.openGallery(item.url)}
                        />
                    }>
                    <Card.Meta title="http://gank.io/" description={item.desc} />
                </Card>
            ))
        );

        return (
            <div className="gallery-wrap">
                <PageHeader  title="图片画廊" subTitle="图片接口来自http://gank.io/" />
                <Row gutter={10}>
                    <Col className="gutter-row" md={5}>
                        {imgList[0]}
                    </Col>
                    <Col className="gutter-row" md={5}>
                        {imgList[1]}
                    </Col>
                    <Col className="gutter-row" md={5}>
                        {imgList[2]}
                    </Col>
                    <Col className="gutter-row" md={5}>
                        {imgList[3]}
                    </Col>
                    <Col className="gutter-row" md={4}>
                        {imgList[4]}
                    </Col>
                </Row>
                <Modal
                    width={300}
                    height={500}
                    visible={this.state.visible}
                    title="图片画廊"
                    onCancel={()=>{
                        this.setState({
                            visible:false
                        })
                    }}
                    footer={null}
                >
                   {<img src={this.state.currentImg} alt="" style={{width:'100%'}}/>}
                </Modal>
            </div>
        );
    }
}
export default GalleryDemo;
