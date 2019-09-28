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
import DomesticGoose from './images/domesticGoose.jpg';

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
		answers: ["Canada goose", "Greylag goose", "Barnacle goose", "Hawaiian goose"],
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
		latinName: "Plectropterus gambensis",
		averageWeight: "4–6.8 kg",
		quizAltText: "Latin name is plectropterus gambensis and it weights 4-6.8kg on average",
		description: "This species often occurs in open grasslands with lakes, seasonal pools, rivers, swamps and river deltas, throughout sub-Saharan Africa. . This bird is often poisonous due to its diet of blister beetles."
	},
	{
		question: "What type of goose is this?",
		image: `${RedBreastedGoose}`,
		correctAnswer: "Red breasted goose",
		answers: ["Red breasted goose", "Canada goose", "Ross goose", "Magpie goose"],
		url: "red-breasted-goose",
		latinName: "Branta ruficollis",
		averageWeight: "1-1.5kg",
		quizAltText: "Latin name is branta ruficollis and it nweights 1-1.5kg on average",
		description: "The red-breasted goose breeds in Arctic Siberia, mainly on the Taymyr Peninsula, with smaller populations in the Gyda and Yamal peninsulas.. The red-breasted goose often nests close to nests of birds of prey, such as snowy owls, peregrine falcons and rough-legged buzzards, which helps to protect this small goose from mammalian predators such as the Arctic fox."
	},
	{
		question: "What type of goose is this?",
		image: `${MagpieGoose}`,
		correctAnswer: "Magpie goose",
		answers: ["Black spur-winged goose", "Magpie goose", "Chinese goose", "Barnacle goose"],
		url: "magpie-goose",
		latinName: "Anseranas semipalmata",
		averageWeight: "2-3kg",
		quizAltText: "Latin name is Anseranas semipalmata and it weighs 2-3kg on average",
		description: "Magpie geese are unmistakable birds with their black and white plumage and yellowish legs. The feet are only partially webbed, and the magpie goose feeds on vegetable matter in the water, as well as on land. This common waterbird is found in northern Australia and southern New Guinea."
	},
	{
		question: "What type of goose is this?",
		image: `${EmperorGoose}`,
		correctAnswer: "Emperor goose",
		answers: ["Greylag goose", "Canada goose", "Emperor goose", "Bar-headed goose"],
		url: "emperor-goose",
		latinName: "Anser canagicus",
		averageWeight: "2-2.5kg",
		quizAltText: "Latin name is Anser canagicus and it weighs 2-2.5kg on average ",
		description: "In the winter, the emperor goose lives in mudflats and coasts in Alaska and occasionally Canada and the contiguous United States. In the summer, it migrates northerly several hundred miles to arctic and sub-arctic climates, where older specimens breed monogamously. The species is an omnivore, and makes vocalizations that are more nasal than those of other geese. "
	},
	{
		question: "What type of goose is this?",
		image: `${HawaiianGoose}`,
		correctAnswer: "Hawaiian goose",
		answers: ["Brent goose", "Magpie goose", "Red-breasted goose", "Hawaiian goose"],
		url: "hawaiian-goose",
		latinName: "Branta sandvicensis",
		averageWeight: "8.5kg",
		quizAltText: "Latin name is Branta sandvicensis and it weighs 8.5kg",
		description: "The Hawaiian goose, also known as nēnē, is a species of bird endemic to the Hawaiian Islands. It is thought that the nene evolved from the Canada goose (Branta canadensis), which most likely arrived on the Hawaiian islands about 500,000 years ago, shortly after the island of Hawaiʻi was formed. The nene is the world's rarest goose.[12] It is believed that it was once common, with approximately 25,000 Hawaiian geese living in Hawaiʻi when Captain James Cook arrived in 1778. Hunting and introduced predators, such as small Asian mongooses, pigs, and cats, reduced the population to 30 birds by 1952. The nature reserve WWT Slimbridge, in England, was instrumental in the successful breeding of Hawaiian geese in captivity. Under the direction of conservationist Peter Scott, it was bred back from the brink of extinction during the 1950s for later re-introduction into the wild in Hawaiʻi. There are still Hawaiian geese at Slimbridge today. They can now be found in captivity in every WWT centre."
	},
	{
		question: "What type of goose is this?",
		image: `${RossGoose}`,
		correctAnswer: "Ross' goose",
		answers: ["Egyptian goose", "Ross' goose", "Barnacle goose", "Hawaiian goose"],
		url: "ross-goose",
		latinName: "Anser rossii",
		averageWeight: "1.7kg",
		quizAltText: "Latin name is Anser rossii and it weighs 1.7kg on average",
		description: "The Ross's goose is named in honor of Bernard R. Ross, who was associated with the Hudson’s Bay Company in Canada’s Northwest Territories. Members of the Hudson's Bay Company were the first to discover the arctic nesting grounds of Ross's geese in 1940. Before the early 1900s, this goose was considered a rare species, possibly as a consequence of open hunting, but numbers have increased dramatically as a result of conservation measures."
	},
	{
		question: "What type of goose is this?",
		image: `${BarHeadedGoose}`,
		correctAnswer: "Bar-headed goose",
		answers: ["Chinese goose", "Bar-headed goose", "Black spur-winged goose", "Brent goose"],
		url: "bar-headed-goose",
		latinName: "Anser indicus",
		averageWeight: "2-3kg",
		quizAltText: "Latin name is Anser indicus and it weighs 2-3 kg",
		description: "The bar-headed goose is a goose that breeds in Central Asia in colonies of thousands near mountain lakes and winters in South Asia, as far south as peninsular India. The bar-headed goose is one of the world's highest-flying birds, having been heard flying across Mount Makalu – the fifth highest mountain on earth at 8,481 m (27,825 ft) – and apparently seen over Mount Everest – 8,848 m (29,029 ft) – although this is a second-hand report with no verification."
	},
	{
		question: "What type of goose is this?",
		image: `${BarHeadedGoose}`,
		correctAnswer: "Domestic goose",
		answers: ["Chinese goose", "Bar-headed goose", "Domestic goose", "Brent goose"],
		url: "domestic-goose",
		latinName: "Anser anser domesticus",
		averageWeight: "up to 10kg",
		quizAltText: "Latin name is anser anser domesticus and it weighs up to 10kg",
		description: "Domestic geese are domesticated grey geese (either greylag geese or swan geese) that are kept by humans as poultry for their meat, eggs, and down feathers since ancient times. Changes to the plumage are variable; many have been selected to lose dark brown tones of the wild bird. White geese are often preferred as they look better plucked and dressed, with any small down feathers remaining being less conspicuous. From the time of the Romans, white geese have been held in great esteem."
	}
];

export default quizQuestions;