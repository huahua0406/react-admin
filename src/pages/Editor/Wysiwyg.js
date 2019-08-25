import React, { Component } from 'react';
import { Card, Button, Modal } from 'antd';

import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class Wysiwyg extends Component {

    state = {
        showRichText: false,
        editorState: '',
        editorContent: ' '
    };

    handleClearContent = () => {  //清空文本
        this.setState({
            editorState: ''
        })
    }
    handleGetText = () => {    //获取文本内容
        this.setState({
            showRichText: true
        })
    }

    onEditorStateChange = editorState => {
        this.setState({
            editorState
        });
    };

    onEditorContentChange = editorContent => {
        console.log(editorContent);
        this.setState({
            editorContent
        });
    };

    render() {
        const { showRichText, editorContent, editorState } = this.state;
        return (
            <div>
                <Card>
                    <Button type="primary" onClick={this.handleClearContent}>
                        清空内容
                    </Button>
                    <Button
                        type="primary"
                        onClick={this.handleGetText}
                        style={{ marginLeft: 10 }}>
                        获取html文本
                    </Button>
                </Card>
                <Card title="富文本编辑器">
                    <Editor
                        editorState={editorState}
                        toolbarClassName="editor-toolbar"
                        wrapperClassName="editor-wrapper"
                        editorClassName="editor"
                        onEditorStateChange={this.onEditorStateChange}
                        onContentStateChange={this.onEditorContentChange}
                        placeholder="请输入内容"
                    />
                    <style>{`
                        .editor {
                            min-height: 200px;
                            padding: 5px 15px;
                            border: 1px solid #F1F1F1;
                        }
                    `}</style>
                </Card>
                <Modal 
                    title="富文本内容"
                    visible={showRichText}
                    onCancel={() =>{
                        this.setState({
                            showRichText: false
                        })
                    }}
                    footer={null}>
                    {draftToHtml(editorContent)}
                </Modal>
            </div>
        );
    }
}
export default Wysiwyg;
