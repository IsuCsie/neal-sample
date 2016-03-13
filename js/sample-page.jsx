import React from "react";
import { Link } from "react-router";
import {
  Footer,
  Hero,
  HorizontalSplit,
  ImageList, ImageListItem,
  Navbar, NavItem,
  Page,
  Section,
  Team,
  TeamMember,
} from "neal-react";

const brandName = "ISUCSIE";
const brand = <span>{brandName}</span>;

export default (props) => {
  return (
    <Page>

      <Navbar brand={brand}>
        <NavItem><a href="https://github.com/IsuCsie" target="_blank" className="nav-link">Github</a></NavItem>
      </Navbar>
      <Hero backgroundColor="#263238"
        className="text-center">
        <h1 className="display-1"> 一群小咖的集散地 </h1>
        <p className="lead">多寫扣沒事，沒事多寫扣</p>
        <p>
          <a href="https://github.com/IsuCsie" className="btn btn-white">
            馬上行動
          </a>
        </p>
      </Hero>

      <Section>
        <Team>
          <TeamMember name="Chu" title="Co-founder" imageUrl="https://avatars0.githubusercontent.com/u/3134286">
          </TeamMember>
          <TeamMember name="Dca" title="Co-founder" imageUrl="https://avatars3.githubusercontent.com/u/226619">
          </TeamMember>
          <TeamMember name="Xi2an" title="Co-founder" imageUrl="https://avatars0.githubusercontent.com/u/869032">
          </TeamMember>
          <TeamMember name="Jhe" title="Co-founder" imageUrl="https://avatars0.githubusercontent.com/u/10076774">
          </TeamMember>
          <TeamMember name="Weibrother" title="Member" imageUrl="https://avatars1.githubusercontent.com/u/6070384">
          </TeamMember>
        </Team>
      </Section>

      <Footer brandName={brandName}
        githubUrl="https://github.com/IsuCsie">
      </Footer>
    </Page>
  );
};
