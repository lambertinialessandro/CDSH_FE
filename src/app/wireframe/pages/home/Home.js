import { DateTime } from 'luxon';
import AuditionBanner from './sections/AuditionBanner';
import BigAuditionBanner from './sections/BigAuditionBanner';
import Focus from './sections/Focus';
import PresentationCarousel from './sections/PresentationCarousel';
import PresentationVideo from './sections/PresentationVideo';
import Welcome from './sections/Welcome';
import WhatsNew from './sections/WhatsNew';

function Home() {
	const date = DateTime.now().plus({ month: 1 }).setLocale('en-gb').toLocaleString();

	return (
		<>
			{date && <AuditionBanner date={date} />}

			<PresentationVideo />

			<Welcome />
			<PresentationCarousel />
			<WhatsNew />

			{date && <BigAuditionBanner date={date} />}

			<Focus />
		</>
	);
}

export default Home;
