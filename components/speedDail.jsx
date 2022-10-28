import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ShareIcon from '@mui/icons-material/Share';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';



function SpeedDail() {

    const actions = [
        { icon: <GitHubIcon />, name: 'Github', url: 'https://github.com/gdsc-jisu' },
        { icon: <LinkedInIcon />, name: 'LinkedIn', url: 'https://www.linkedin.com/company/gdsc-jisu' },
        { icon: <TwitterIcon />, name: 'Twitter', url: 'https://twitter.com/gdsc_jisu' },
        { icon: <FacebookIcon />, name: 'FaceBook', url: 'https://www.facebook.com/groups/gdscjisu' },
        { icon: <InstagramIcon />, name: 'Instagram', url: 'https://www.instagram.com/gdsc_jisu/' },
        { icon: <YouTubeIcon />, name: 'YouTube', url: 'https://www.youtube.com' },
        { icon: <RssFeedIcon />, name: 'LinkTree', url: 'https://linktr.ee/gdsc_jisu' },
    ];


    return (
        <>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'fixed', bottom: 16, left: 16 }}
                icon={<ShareIcon />}
                className=" text-yellow-500"
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={() => {
                            window.open(action.url, '_blank');
                        }
                        }
                    />
                ))}
            </SpeedDial>
        </>
    )
}

export default SpeedDail