import { IconBaseProps } from 'react-icons';
import { FaBehanceSquare } from 'react-icons/fa';
import { PiGraduationCapFill } from 'react-icons/pi';
import { BsFillBriefcaseFill, BsFillCheckCircleFill, BsTelegram } from 'react-icons/bs';
import { RiInstagramFill, RiYoutubeFill, RiTwitterFill, RiTiktokFill, RiFacebookCircleFill, RiLinkedinBoxFill, RiDiscordFill, RiThreadsFill, RiSnapchatFill, RiPinterestFill, RiWhatsappFill } from 'react-icons/ri';
import Icon from '../components/Icon/Icon';

/**
 *
 */
export namespace IconFactory {
	
  export const instagramIcon = (props?: IconBaseProps) => {
    return Icon(props ? props : {}, RiInstagramFill);
  };

	export const linkedInIcon = (props?: IconBaseProps) => {
    return Icon(props ? props : {}, RiLinkedinBoxFill);
  };

	export const behanceIcon = (props?: IconBaseProps) => {
    return Icon(props ? props : {}, FaBehanceSquare);
  };

	export const graduationCapIcon = (props?: IconBaseProps) => {
		return Icon(props ? props : {}, PiGraduationCapFill);
	};

	export const briefcaseIcon = (props?: IconBaseProps) => {
		return Icon(props ? props : {}, BsFillBriefcaseFill);
	};

	export const checkIcon = (props?: IconBaseProps) => {
		return Icon(props ? props : {}, BsFillCheckCircleFill);
	};

	export const ytIcon = (props?: IconBaseProps) => {
		return Icon(props ? props: {}, RiYoutubeFill);
	};

	export const twitterIcon = (props?: IconBaseProps) => {
		return Icon(props ? props: {}, RiTwitterFill);
	};

	export const tiktokIcon = (props?: IconBaseProps) => {
		return Icon(props ? props: {}, RiTiktokFill);
	};

	export const fbIcon = (props?: IconBaseProps) => {
		return Icon(props ? props: {}, RiFacebookCircleFill);
	};

	export const dcIcon = (props?: IconBaseProps) => {
		return Icon(props ? props: {}, RiDiscordFill);
	};

	export const threadsIcon = (props?: IconBaseProps) => {
		return Icon(props ? props: {}, RiThreadsFill);
	};

	export const snapchatIcon = (props?: IconBaseProps) => {
		return Icon(props ? props: {}, RiSnapchatFill);
	};

	export const pinterestIcon = (props?: IconBaseProps) => {
		return Icon(props ? props: {}, RiPinterestFill);
	};

	export const whatsappIcon = (props?: IconBaseProps) => {
		return Icon(props ? props: {}, RiWhatsappFill);
	}

	export const telegramIcon = (props?: IconBaseProps) => {
		return Icon(props ? props: {}, BsTelegram);
	}
}
