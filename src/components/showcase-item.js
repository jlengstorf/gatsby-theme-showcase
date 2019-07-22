/** @jsx jsx */
import { jsx, css } from 'theme-ui';
import { MdLaunch } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';

const ExternalLink = ({ children, href }) => (
  <a
    sx={{
      display: `grid`,
      gridColumnGap: `1`,
      gridTemplateColumns: `auto 1fr`,
      alignItems: `center`,
      textDecoration: `none`,
    }}
    href={href}
  >
    {children}
  </a>
);

const WinnerBoxStyles = {
  backgroundColor: 'red',
  '&::before': {
    position: `absolute`,
    zIndex: `0`,
    width: `90px`,
    height: `90px`,
    right: 0,
    transform: `translate(20px, -20px)`,
    content: `''`,
    backgroundImage: theme =>
      `linear-gradient(135deg, ${
        theme.colors.secondary
      } 16.67%, #ffffff 16.67%, #ffffff 50%, ${theme.colors.secondary} 50%, ${
        theme.colors.secondary
      } 66.67%, #ffffff 66.67%, #ffffff 100%)`,
    backgroundSize: `5px 5px`,
  },
  '&::after': {
    position: `absolute`,
    zIndex: `0`,
    content: `''`,
    top: 0,
    right: 0,
    transform: `translate(20px, -20px)`,
    borderRight: `90px solid transparent`,
    borderTop: theme => `90px solid ${theme.colors.secondary}`,
  },
};

const ShowcaseItem = ({ item }) => {
  const { winner, avatar, screenshot, demo, repo, name, themeName } = item;

  return (
    <div
      sx={{
        position: `relative`,
      }}
    >
      {winner && (
        <div
          sx={{
            position: `absolute`,
            transform: `translateY(-20px)`,
            right: 0,
            fontSize: `0`,
            fontWeight: `bold`,
          }}
        >
          {`Winner`.toUpperCase()}
        </div>
      )}
      <div
        sx={{
          variant: `shadows.elevated`,
          backgroundImage: `url(${screenshot})`,
          backgroundSize: `cover`,
          backgroundPosition: `center`,
          pb: `66.66%`,
          ...(winner && WinnerBoxStyles),
        }}
      />
      <div
        sx={{
          display: `grid`,
          gridTemplateAreas: `
          "avatar author"
          "avatar name"
          "avatar links"
        `,
          gridTemplateColumns: `32px auto`,
          gridColumnGap: `2`,
          mt: `2`,
        }}
      >
        <div sx={{ gridArea: `avatar` }}>
          <img
            sx={{
              variant: `shadows.elevated`,
              width: winner ? `200%` : `100%`,
              transform: winner ? `translateX(-32px)` : ``,
            }}
            src={avatar}
          />
        </div>
        <div sx={{ gridArea: `author` }}>
          <p sx={{ margin: 0 }}>{name}</p>
        </div>
        <div sx={{ gridArea: `name` }}>
          <p sx={{ margin: 0, fontWeight: `bold` }}>{themeName}</p>
        </div>
        <div
          sx={{
            display: `flex`,
            gridArea: `links`,
            fontSize: `0`,
            '* + *': {
              ml: '2',
            },
          }}
        >
          <ExternalLink href={demo}>
            Demo <MdLaunch />
          </ExternalLink>
          <ExternalLink href={repo}>
            Source <FaGithub />
          </ExternalLink>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseItem;
