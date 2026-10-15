// Leader data with all fields including rep names
const leadersData = [
    // TSIA Tier 1 (20 leaders)
    { name: 'Artem Khvastunov', category: 'tsia1', company: 'JetBrains', title: 'Head of Professional Services', linkedIn: 'https://www.linkedin.com/in/artspb', rep: 'Jack Griggs' },
    { name: 'Carlos Quezada', category: 'tsia1', company: 'Gigamon', title: 'VP, Global Services & Success', linkedIn: 'https://www.linkedin.com/in/cquezada', rep: 'Gil Ramirez' },
    { name: 'Chad Craig', category: 'tsia1', company: 'Workday', title: 'Senior Director, Global Services Delivery and Resource Management', linkedIn: 'https://www.linkedin.com/in/chad-craig-b3530165', rep: 'Matt Lyman' },
    { name: 'Yvonne Chuang', category: 'tsia1', company: 'Cisco', title: 'Strategy, Planning & Operations Director, Customer Success', linkedIn: 'https://www.linkedin.com/in/yvonnechuang/', rep: 'Matt Lyman' },
    { name: 'Gregory Urban', category: 'tsia1', company: 'Stibo Systems', title: 'SVP, Global Professional Services', linkedIn: 'https://www.linkedin.com/in/gurban', rep: 'Jack Griggs' },
    { name: 'Heather Engen', category: 'tsia1', company: 'Netradyne', title: 'Chief Customer Officer', linkedIn: 'https://www.linkedin.com/in/heatherengen', rep: 'Andy Lipski' },
    { name: 'Hilary Gronberg', category: 'tsia1', company: 'Mongodb', title: 'Director, Professional Services', linkedIn: 'https://www.linkedin.com/in/hilary-gronberg', rep: 'Gil Ramirez' },
    { name: 'Joe Marruchella', category: 'tsia1', company: 'Alteryx', title: 'Vice President, Professional Services', linkedIn: 'https://www.linkedin.com/in/josephmarruchella', rep: 'Matt Lyman' },
    { name: 'Lisa James', category: 'tsia1', company: 'Relias', title: 'SVP Professional Services & Client Support', linkedIn: 'https://www.linkedin.com/in/ljames1', rep: 'Brandon Stevenett' },
    { name: 'Marc Winans', category: 'tsia1', company: 'Hitachi Vantara', title: 'Director Global Services Delivery Enablement', linkedIn: 'https://linkedin.com/in/marc-winans-9a72941', rep: 'Matt Lyman' },
    { name: 'Mayowa Ige', category: 'tsia1', company: 'OneTrust', title: 'VP, delivery Services', linkedIn: 'https://linkedin.com/in/mayowa-ige-12060860', rep: 'Matt Lyman' },
    { name: 'Monique Rupert', category: 'tsia1', company: 'Blue Yonder', title: 'Global SVP Professional Services', linkedIn: 'https://www.linkedin.com/in/moniquerupert', rep: 'Gil Ramirez' },
    { name: 'Nick Blades', category: 'tsia1', company: 'OneStream Software', title: 'SVP, Consulting Services', linkedIn: 'https://www.linkedin.com/in/nick-blades-a4a29aa', rep: 'Andy Cagle' },
    { name: 'Paul Yaros', category: 'tsia1', company: 'Anaqua', title: 'Chief Customer Officer', linkedIn: 'https://www.linkedin.com/in/paulyaros', rep: 'Anders Capener' },
    { name: 'Robert DelPonte', category: 'tsia1', company: 'UKG', title: 'EVP, Chief Customer Experience Officer', linkedIn: 'https://www.linkedin.com/in/bob-delponte-1b6704/', rep: 'Matt Lyman' },
    { name: 'Sebastien Gagne', category: 'tsia1', company: 'Coveo', title: 'Senior Director, Professional Services', linkedIn: 'https://www.linkedin.com/in/gagnesebastien', rep: 'Sarah Warner' },
    { name: 'Sonia Hawkins', category: 'tsia1', company: 'Aeries Software', title: 'Director, Implementation & Pro Services', linkedIn: 'https://www.linkedin.com/in/sonia-hawkins-b480a12b0', rep: 'Kaushik Shankar' },
    { name: 'Swati Chopra', category: 'tsia1', company: 'Intel Corporation', title: 'Director, Service Strategy and engagement', linkedIn: 'https://www.linkedin.com/in/swatichopra11', rep: 'Matt Lyman' },
    { name: 'Todd Crandall', category: 'tsia1', company: 'SAP', title: 'SVP, Americas Head of Customer Services and Delivery', linkedIn: 'https://www.linkedin.com/in/toddcrandall', rep: 'Jack Griggs' },
    { name: 'Troy Baldwin', category: 'tsia1', company: 'Compucom', title: 'Sr. Director Service Experience & Portfolio Management', linkedIn: 'https://www.linkedin.com/in/troy-baldwin-0b14931b', rep: 'Matt Lyman' },
    // TSIA Tier 2 (53 leaders)
    { name: 'Aaron Callahan', category: 'tsia2', company: 'Hirevue', title: 'Sr. Director Professional Services', linkedIn: 'https://www.linkedin.com/in/aaroncallahan', rep: 'Sarah Warner' },
    { name: 'Amber Monroe', category: 'tsia2', company: 'Paradigm Senior Services', title: 'SVP of Customer Experience', linkedIn: 'https://linkedin.com/in/ambermonroe', rep: 'Anders Capener' },
    { name: 'Brian Ruffner', category: 'tsia2', company: 'Ciena', title: 'Vice President, Service Portfolio Management and Innovation', linkedIn: 'https://www.linkedin.com/in/dr-brian-ruffner-30a976116', rep: 'Gil Ramirez' },
    { name: 'Carolyn Hardy', category: 'tsia2', company: 'PointClickCare', title: 'SVP, Professional Services', linkedIn: 'https://www.linkedin.com/in/carolynmcgeehardy', rep: 'Stephen Colomay' },
    { name: 'Chad Stoecker', category: 'tsia2', company: 'Advizex', title: 'Vice President of Managed Services', linkedIn: 'https://www.linkedin.com/in/chad-stoecker', rep: 'Sarah Warner' },
    { name: 'Corina Swaney', category: 'tsia2', company: 'Motorola Solutions', title: 'Chief of Staff and Vice President of Global Services Offer Management, Strategy and Operations', linkedIn: 'https://www.linkedin.com/in/corinaswaney', rep: 'Robbie Chamness' },
    { name: 'Craig Seeney', category: 'tsia2', company: 'Diebold Nixdorf', title: 'Head of Professional Services, Europe', linkedIn: 'https://www.linkedin.com/in/craig-seeney-41696580', rep: 'Andy Cagle' },
    { name: 'Daniel Silva', category: 'tsia2', company: 'Flash Global', title: 'Chief Customer Officer', linkedIn: 'https://www.linkedin.com/in/dansilva04', rep: 'Anders Capener' },
    { name: 'Danielle Stallone', category: 'tsia2', company: 'Donnelley Financial Solutions (Dfin)', title: 'Sr. Director, Transformation - Client Solutions & Delivery', linkedIn: 'https://www.linkedin.com/in/danielle-stallone', rep: 'Matt Lyman' },
    { name: 'Dave Lavanty', category: 'tsia2', company: 'Elastic', title: 'VP, Global Services', linkedIn: 'https://www.linkedin.com/in/davidlavanty', rep: 'Matt Lyman' },
    { name: 'Derek Wallace', category: 'tsia2', company: 'Zebra Technologies', title: 'Director Product Management - Managed/Professional Services', linkedIn: 'https://www.linkedin.com/in/derekwallace', rep: 'Matt Lyman' },
    { name: 'Desiree Tipuric', category: 'tsia2', company: 'Pros', title: 'Director, Professional Services', linkedIn: 'https://www.linkedin.com/in/desiree-christine-tipuric-1070b453/', rep: 'Denzeyl Morris' },
    { name: 'Drew Davis', category: 'tsia2', company: 'Keyfactor', title: 'Director, Global Delivery and Project Management', linkedIn: 'https://www.linkedin.com/in/drewallendavis/', rep: 'Sarah Warner' },
    { name: 'Ed Tatman', category: 'tsia2', company: 'BMC Helix', title: 'VP Professional Services', linkedIn: '', rep: 'Matt Lyman' },
    { name: 'Eric Lee', category: 'tsia2', company: 'Cornerstone OnDemand, Inc.', title: 'SVP, Global Services, Support, Enablement', linkedIn: 'https://www.linkedin.com/in/ericlee6/', rep: 'Gil Ramirez' },
    { name: 'Eric Panepinto', category: 'tsia2', company: 'Hyland', title: 'SVP Global Services', linkedIn: 'https://linkedin.com/in/ericpanepinto', rep: 'Andy Cagle' },
    { name: 'Flavia Rigamonti', category: 'tsia2', company: 'AHEAD', title: 'VP of Services Strategy', linkedIn: 'https://www.linkedin.com/in/flaviar', rep: 'Gil Ramirez' },
    { name: 'Jason McGregor', category: 'tsia2', company: 'Dell Technologies', title: 'VP, Global Delivery', linkedIn: 'https://www.linkedin.com/in/jason-mcgregor-99097b12', rep: 'Robbie Chamness' },
    { name: 'Jeffrey Khaw', category: 'tsia2', company: 'F5 Inc', title: 'Global Services Director, Asia Pacific', linkedIn: 'https://www.linkedin.com/in/jeffrey-khaw-88b17221', rep: 'Matt Lyman' },
    { name: 'Jennifer Turgeon', category: 'tsia2', company: 'Tyler Technologies', title: 'SVP, Professional Services', linkedIn: 'https://www.linkedin.com/in/jennifer-turgeon-2b126626', rep: 'Gil Ramirez' },
    { name: 'Jesper Cordes', category: 'tsia2', company: 'Goldensource', title: 'Chief Customer Officer', linkedIn: 'https://www.linkedin.com/in/jesper-cordes', rep: 'Geoff Gebhardt' },
    { name: 'Jitendra Joshi', category: 'tsia2', company: 'Syndigo', title: 'SVP, Global Consulting & Technical Services, Customer Implementations', linkedIn: 'https://www.linkedin.com/in/joshijitendra', rep: 'Gil Ramirez' },
    { name: 'Joshua Hoffert', category: 'tsia2', company: 'TravelNet Solutions', title: 'VP Professional Services', linkedIn: 'https://www.linkedin.com/in/joshuahoffert', rep: 'Sarah Warner' },
    { name: 'Kylin Cao', category: 'tsia2', company: 'Lenovo', title: 'Service Portfolio Director', linkedIn: 'https://www.linkedin.com/in/kylincao', rep: 'Andy Cagle' },
    { name: 'Laura Repaci', category: 'tsia2', company: 'Pluralsight LLC', title: 'SVP, Global Professional Services', linkedIn: 'https://www.linkedin.com/in/laura-repaci', rep: 'Gil Ramirez' },
    { name: 'Lee Palmer', category: 'tsia2', company: 'Infor', title: 'Executive Vice President - Americas Professional Services Leader', linkedIn: 'https://www.linkedin.com/in/lee-palmer-136593', rep: 'Matt Lyman' },
    { name: 'Lisa Haag', category: 'tsia2', company: 'Auritas', title: 'SVP Professional Services', linkedIn: 'https://linkedin.com/in/lisa-haag', rep: 'Tanner DeVinny' },
    { name: 'Mansuk Suh', category: 'tsia2', company: 'National Instruments', title: 'Director, Global Services Delivery Management', linkedIn: 'https://www.linkedin.com/in/mansuk', rep: 'Matt Lyman' },
    { name: 'Sadie Brackin', category: 'tsia2', company: 'Palo Alto Networks', title: 'Sr. Director, Professional Services', linkedIn: '', rep: 'Robbie Chamness' },
    { name: 'Scott Cravotta', category: 'tsia2', company: 'Genesys', title: 'Chief Customer Officer', linkedIn: 'https://linkedin.com/in/scott-cravotta-31b4843', rep: 'Matt Lyman' },
    { name: 'Scott MacPhee', category: 'tsia2', company: 'Hewlett Packard Enterprise', title: 'VP, HPE Services Support Delivery', linkedIn: 'https://linkedin.com/in/scott-macphee-215a756', rep: 'Robbie Chamness' },
    { name: 'Sofia Barbosa', category: 'tsia2', company: 'Bmc Software', title: 'SVP, Chief Customer Officer', linkedIn: 'https://www.linkedin.com/in/sofiabarbosa', rep: 'Robbie Chamness' },
    { name: 'Steve Spence', category: 'tsia2', company: 'Compugen Inc', title: 'Director, Service Portfolio Management', linkedIn: 'https://www.linkedin.com/in/stephenspence0000', rep: 'Andy Cagle' },
    { name: 'Terri Olson-Stepp', category: 'tsia2', company: 'Medtronic', title: 'Director of Professional Services', linkedIn: 'https://linkedin.com/in/terriolsonstepp', rep: 'Andy Cagle' },
    { name: 'Tiago Eliseu', category: 'tsia2', company: 'Outsystems', title: 'Director, Professional Services', linkedIn: 'https://www.linkedin.com/in/tiago-eliseu/', rep: 'Andy Cagle' },
    { name: 'Tonia Whitton', category: 'tsia2', company: 'Vertex Inc.', title: 'VP, Global Professional Services', linkedIn: 'https://www.linkedin.com/in/tonia-whitton-b95678', rep: 'Stephen Colomay' },
    { name: 'Yogesh Jankee', category: 'tsia2', company: 'Dayforce, Inc.', title: 'VP of President Services', linkedIn: 'https://www.linkedin.com/in/yogeshjankee', rep: 'Jessica Langrock' },
    // ProPelX - Services Led Round (10 leaders)
    { name: 'Sukanya Kuppuswamy', category: 'propelx', company: 'Chargebee', title: 'Vice President, Shared Services', linkedIn: 'https://www.linkedin.com/in/sukanya-kuppuswamy', rep: 'Tanner DeVinny' },
    { name: 'Steff Johnston', category: 'propelx', company: 'CloudPay', title: 'Vice President, Global Implementation', linkedIn: 'https://www.linkedin.com/in/steff-johnston-2470b56', rep: 'Jack Griggs' },
    { name: 'Liam Miner', category: 'propelx', company: 'Contentsquare', title: 'Vice President of Professional Services', linkedIn: 'https://www.linkedin.com/in/liam-miner', rep: 'Keshav R Pillai' },
    { name: 'Gerard Allen', category: 'propelx', company: 'Jamf', title: 'Vice President of Professional Services', linkedIn: 'https://www.linkedin.com/in/gerardallen', rep: 'Mukesh Kumar' },
    { name: 'Grant Watling', category: 'propelx', company: 'Hg', title: 'Portfolio Chief Customer Officer', linkedIn: 'https://www.linkedin.com/in/gwatling', rep: 'Devadharshini V' },
    { name: 'Olivier Laarhoven', category: 'propelx', company: 'Adyen', title: 'Head of Professional Services Excellence', linkedIn: '', rep: 'Jack Griggs' },
    { name: 'Kerri Geddes', category: 'propelx', company: 'simPRO', title: 'Director of Global Professional Services', linkedIn: 'https://www.linkedin.com/in/kerri-geddes-b0063a4a', rep: 'Jital Mehta' },
    { name: 'Vidya Macleod', category: 'propelx', company: 'Basware', title: 'Director, Advisory Services', linkedIn: 'https://www.linkedin.com/in/vidyamacleod', rep: 'Sophie Thomas' },
    { name: 'Hendrik Zondag', category: 'propelx', company: 'BlueRock TMS', title: 'Practice Director, Operations', linkedIn: 'https://www.linkedin.com/in/hendrikzondag', rep: 'Jital Mehta' },
    { name: 'Rui Vieira', category: 'propelx', company: 'Cisilion', title: 'Director of Technology and Professional Services', linkedIn: 'https://www.linkedin.com/in/ruivieira84', rep: 'Hammad M' }
];

// Helper function to get leader by name slug
function getLeaderBySlug(slug) {
    const unslugify = slug.replace(/-/g, ' ').toLowerCase();
    return leadersData.find(leader => leader.name.toLowerCase() === unslugify);
}

// Helper function to create slug from leader name
function createSlug(name) {
    return name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
}

// Helper function to get category label
function getCategoryLabel(category) {
    const labels = {
        'tsia1': 'TSIA Tier 1',
        'tsia2': 'TSIA Tier 2',
        'propelx': 'PropelX'
    };
    return labels[category] || category;
}

// Outreach template
function getOutreachTemplate(firstName, company) {
    return `Hi ${firstName}, we printed a custom edition of our "Services Led" book highlighting your work at ${company}. We'd love to hand you your physical copy at TSIA in Vegas! Are you heading to the conference?`;
}
