import CandaGoose from './images/canada.JPG';
import GreylagGoose from './images/greylag.JPG';
import ChineseGoose from './images/chinesegoose.jpg';
import BarnacleGoose from './images/barnaclegoose.jpg';
import EgyptianGoose from './images/egyptianGoose.jpg';
import BrentGoose from './images/brentGoose.jpg';
import BlackSpurWingedGoose from './images/blackSpurWingedGoose.jpg';
import MagpieGoose from './images/magpieGoose.jpg';
import RedBreastedGoose from './images/redBreastedGoose2.jpg';
import EmperorGoose from './images/emperorGoose.jpg';
import HawaiianGoose from './images/Nene.jpg';
import BarHeadedGoose from './images/barHeadedGoose.jpg';
import RossGoose from './images/rossGoose2.jpg';

const quizQuestions = [
	{
		question: "What type of goose is this?",
		image: `${GreylagGoose}`,
		correctAnswer: "Greylag goose",
		answers: ["Brent goose", "Canada goose", "Greylag goose", "Bean goose"],
		url: "greylag-goose",
		latinName: "Anser anser",
		averageWeight: "2.9 to 3.7kg",
		quizAltText: "Latin name is anser anser and it weighs 3.3kg on average.",
		description: "The greylag goose (Anser anser) is a species of large goose in the waterfowl family Anatidae and the type species of the genus Anser. It has mottled and barred grey and white plumage and an orange beak and pink legs. It is the type species of the genus Anser and is the ancestor of the domestic goose, having been domesticated at least as early as 1360 BC. The genus name is from anser, the Latin for 'goose'."
	},
	{
		question: "What type of goose is this?",
		image: `${ChineseGoose}`,
		correctAnswer: "Chinese goose",
		answers: ["Chinese goose", "Canada goose", "Bean goose", "Greylag goose"],
		url: "chinese-goose",
		latinName: "Anser cygnoides",
		averageWeight: "5 to 10kg",
		quizAltText: "Latin name is Anser cygnoides and it weighs 5 to 10 on average",
		description: "The Chinese goose is a breed of domesticated goose descended from the wild swan goose. Chinese geese differ from the wild birds in much larger size (up to 5–10 kg in males, 4–9 kg in females), and in having an often strongly developed basal knob on the upper side of the bill. The knob at the top of the beak is more prominent on males than females. By 6–8 weeks of age, the knob is already pronounced enough that it can be used for determining gender. Chinese geese are a close cousin of the African goose, a heavier breed also descended from the swan goose."
	},	
	{
		question: "What type of goose is this?",
		image: `${BrentGoose}`,
		correctAnswer: "Brent goose",
		answers: ["Egyptian goose", "Greater white fronted goose", "Bean goose", "Brent goose"],
		url: "brent-goose",
		latinName: "Branta bernicla",
		averageWeight: "1.3 to 1.6kg",
		quizAltText: "Latin name is Branta bernicla and it weighs 1.3 to 1.6kg on average",
		description: "The brant is a small goose with a short, stubby bill. The under-tail is pure white, and the tail black and very short (the shortest of any goose).The body of the dark-bellied form is fairly uniformly dark grey-brown all over, the flanks and belly not significantly paler than the back. The head and neck are black, with a small white patch on either side of the neck. It breeds on the Arctic coasts of central and western Siberia and winters in western Europe, with over half the population in southern England, the rest between northern Germany and northern France."
	},
	{
		question: "What type of goose is this?",
		image: `${BarnacleGoose}`,
		correctAnswer: "Barnacle goose",
		answers: ["Egyptian goose", "Barnacle goose", "Brent goose", "Canada goose"],
		url: "barnacle-goose",
		latinName: "Branta leucopsis",
		averageWeight: "1.3 to 2.2kg",
		quizAltText: "Latin name is Branta leucopsis and it weighs 1.3 to 2.2kg on average",
		description: "The barnacle goose (Branta leucopsis) belongs to the genus Branta of black geese, which contains species with largely black plumage, distinguishing them from the grey Anser species. Despite its superficial similarity to the brant goose, genetic analysis has shown it is an eastern derivative of the cackling goose lineage.It has a white face and black head, neck, and upper breast. Its belly is white. The wings and its back are silver-gray with black-and-white bars that look like they are shining when the light reflects on it. During flight, a V-shaped white rump patch and the silver-gray underwing linings are visible.  Barnacle geese breed mainly on the Arctic islands of the North Atlantic."
	},
	{
		question: "What type of goose is this?",
		image: `${CandaGoose}`,
		correctAnswer: "Canada goose",
		answers: ["Canada goose", "Greylag goose", "Barnacle goose", "Chinese goose"],
		url: "canada-goose",
		latinName: "Branta canadensis",
		averageWeight: "4.3-5kg",
		quizAltText: "Latin name is Branta canadensis and it weighs 4.3-5kg",
		description: "The Canada goose (Branta canadensis) is a large wild goose species with a black head and neck, white cheeks, white under its chin, and a brown body. Native to arctic and temperate regions of North America, its migration occasionally reaches northern Europe. It has been introduced to the United Kingdom, New Zealand, Argentina, Chile, and the Falkland Islands. Like most geese, the Canada goose is primarily herbivorous and normally migratory; it tends to be found on or close to fresh water."
	},
	{
		question: "What type of goose is this?",
		image: `${EgyptianGoose}`,
		correctAnswer: "Egyptian goose",
		answers: ["Pink footed goose", "Egyptian goose", "Greater white fronted goose", "Bean goose"],
		url: "egyptian-goose",
		latinName: "Alopochen aegyptiaca",
		averageWeight: "1.5 to 2.25kg",
		quizAltText: "Latin name is Alopochen aegyptiaca and it weighs 1.5 to 2.25kg",
		description: "The Egyptian goose (Alopochen aegyptiaca) is a member of the duck, goose, and swan family Anatidae. It is native to Africa south of the Sahara and the Nile Valley. Egyptian geese were considered sacred by the Ancient Egyptians, and appeared in much of their artwork. Because of their popularity chiefly as an ornamental bird, escapees are common and feral populations have become established in Western Europe. The Egyptian goose has escaped or been deliberately released in to Florida, USA. However Egyptian geese are also now present in many parts of Central and Southeastern Texas  The Egyptian goose is believed to be most closely related to the shelducks (genus Tadorna) and their relatives, and is placed with them in the subfamily Tadorninae. "
	},
	{
		question: "What type of goose is this?",
		image: `${BlackSpurWingedGoose}`,
		correctAnswer: "Black spur-winged goose",
		answers: ["Brent goose", "Egyptian goose", "Black spur-winged goose", "Bean goose"],
		url: "black-spur-winged-goose",
		latinName: "",
		averageWeight: "",
		quizAltText: "",
		description: ""
	},
	{
		question: "What type of goose is this?",
		image: `${RedBreastedGoose}`,
		correctAnswer: "Red breasted goose",
		answers: ["Brent goose", "Egyptian goose", "Black spur-winged goose", "Bean goose"],
		url: "red-breasted-goose",
		latinName: "",
		averageWeight: "",
		quizAltText: "",
		description: ""
	},
	{
		question: "What type of goose is this?",
		image: `${MagpieGoose}`,
		correctAnswer: "Magpie goose",
		answers: ["Brent goose", "Egyptian goose", "Black spur-winged goose", "Bean goose"],
		url: "magpie-goose",
		latinName: "",
		averageWeight: "",
		quizAltText: "",
		description: ""
	},
	{
		question: "What type of goose is this?",
		image: `${EmperorGoose}`,
		correctAnswer: "Emperor goose",
		answers: ["Brent goose", "Egyptian goose", "Black spur-winged goose", "Bean goose"],
		url: "emperor-goose",
		latinName: "",
		averageWeight: "",
		quizAltText: "",
		description: ""
	},
	{
		question: "What type of goose is this?",
		image: `${HawaiianGoose}`,
		correctAnswer: "Hawaiian goose",
		answers: ["Brent goose", "Egyptian goose", "Black spur-winged goose", "Bean goose"],
		url: "hawaiian-goose",
		latinName: "",
		averageWeight: "",
		quizAltText: "",
		description: ""
	},
	{
		question: "What type of goose is this?",
		image: `${RossGoose}`,
		correctAnswer: "Ross' goose",
		answers: ["Brent goose", "Egyptian goose", "Black spur-winged goose", "Bean goose"],
		url: "ross-goose",
		latinName: "",
		averageWeight: "",
		quizAltText: "",
		description: ""
	},
	{
		question: "What type of goose is this?",
		image: `${BarHeadedGoose}`,
		correctAnswer: "Bar-headed goose",
		answers: ["Brent goose", "Egyptian goose", "Black spur-winged goose", "Bean goose"],
		url: "bar-headed-goose",
		latinName: "",
		averageWeight: "",
		quizAltText: "",
		description: ""
	},
];

export default quizQuestions;