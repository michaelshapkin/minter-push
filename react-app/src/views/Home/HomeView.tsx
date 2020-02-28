import "./HomeView.scss";

import {Button, Card, Layout} from "antd";
import Title from "antd/lib/typography/Title";
import {observer} from "mobx-react-lite";
import React, {useContext} from "react";
import {useTranslation} from "react-i18next";

import SendForm from "../../components/SendForm/SendForm";
import {AppStoreContext} from "../../stores/appStore";
import history from "../../stores/history";

import Particles from "react-particles-js";
import {particlesParams} from "../../services/utils";

const {Content} = Layout;

const Home: React.FC = observer(() => {
  const store = useContext(AppStoreContext);
  const {t, i18n} = useTranslation();

  const created = (
    link: string
  ) => {
    history.push(`/create/${link}`)
  };

  return (
    <Content className="home-view">
      <Particles className="particles" params={particlesParams}/>
      <Title level={3} style={{marginBottom: "35px"}}>
        {t("home.title")}
      </Title>
      <Card className="send-card-home">
        <SendForm created={created}/>
      </Card>
      <Button className="multi-btn" onClick={() => history.push("/multi")}>
        {t('multibtn')}
      </Button>
    </Content>
  );
});

export default Home;
