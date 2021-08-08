import { React, useState, useEffect } from "react";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { Modal, Button } from "react-bootstrap";

import styled from "styled-components";
import { t } from "../../util/remConverter";

import { useDispatch, useSelector } from "react-redux";

import { actionCreators as projectActions } from "../../modules/project";
import { ReactComponent as IconMemberAdd } from "../../styles/images/ico-member-add.svg";
import { ReactComponent as IconCopyCode } from "../../styles/images/icon-content-copy.svg";

const ProjectInvite = props => {
  const projectId = props.projectId;
  console.log(props.projectId);
  const dispatch = useDispatch();
  const inviteCode = useSelector(
    state => state.project.inviteCodeList.inviteCode,
  );
  console.log(inviteCode);
  useEffect(() => {
    dispatch(projectActions.__inviteProject(projectId));
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <IconMemberAdd
        cursor="pointer"
        width="40"
        height="40"
        fill="#9A9A9A"
        className="menu-icon"
        onClick={handleShow}
      />

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <div style={{ display: "flex", height: "25px" }}>
            <IconMemberAdd
              cursor="pointer"
              width="25px"
              height="25px"
              fill="#000000"
              className="menu-icon"
              position="absolute"
            />
            <Modal.Title
              style={{ fontWeight: "700", color: "#000000", fontSize: "15px" }}
            >
              같이 PandaN할 멤버 초대
            </Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body style={{ height: "150px" }}>
          <ModalBody>
            <ModalBodyInner>
              <div style={{ padding: "5px" }}> {inviteCode}</div>
              <CopyToClipboard text={inviteCode}>
                <CodeButton>
                  <IconCopyCode
                    cursor="pointer"
                    width="20"
                    height="20"
                    fill="#9A9A9A"
                    className="menu-icon"
                  />
                </CodeButton>
              </CopyToClipboard>
            </ModalBodyInner>
            <P>
              링크를 복사해서 멤버에게 전달해주세요 링크를 통해 가입한 사용자는{" "}
            </P>
            <P> 자동으로 프로젝트에 참여하게 됩니다.</P>
          </ModalBody>
        </Modal.Body>

        <Modal.Footer>
          <InviteBtn variant="primary" onClick={handleClose}>
            멤버 초대하기
          </InviteBtn>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const CodeButton = styled.button(
  ...t`
  width:96px;
height:48px;
  background:#E1EDE4;
`,
);
const ModalBody = styled.div(
  ...t`
  width:80%;
  margin:20px auto 15px auto; 
`,
);

const ModalBodyInner = styled.div(
  ...t`
  width:100%;
  height:48px;
  background:#FAFBFC;
  border-radius:8px;
  border:1px solid #EDEDED;
  display:flex;
  justify-content: space-between;
  margin:0 auto 10px auto;
`,
);

const P = styled.p(
  ...t`
  color:#9A9A9A; 
  font-size: 7px; 
  font-weight: 200;
  `,
);

const InviteBtn = styled.button(
  ...t`
  margin: auto;
  padding: 10px 0;
  color: #767676;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  `,
);
export default ProjectInvite;
