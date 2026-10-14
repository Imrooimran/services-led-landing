// Leader data with all fields including rep names
const leadersData = [
    // TSIA Tier 1 (20 leaders)
    { name: 'Artem Khvastunov', category: 'tsia1', company: 'JetBrains', title: 'Head of Professional Services', linkedIn: 'https://www.linkedin.com/in/artspb', rep: 'Jack Griggs' },
    { name: 'Carlos Quezada', category: 'tsia1', company: 'Gigamon', title: 'VP Global Services & Success', linkedIn: 'https://www.linkedin.com/in/cquezada', rep: 'Gil Ramirez' },
    { name: 'Chad Craig', category: 'tsia1', company: 'Workday', title: 'Senior Director Global Services Delivery', linkedIn: 'https://www.linkedin.com/in/chad-craig-b3530165', rep: 'Matt Lyman' },
    { name: 'Gregory Urban', category: 'tsia1', company: 'Stibo Systems', title: 'SVP Global Professional Services', linkedIn: 'https://www.linkedin.com/in/gurban', rep: 'Jack Griggs' },
    { name: 'Heather Engen', category: 'tsia1', company: 'Netradyne', title: 'Chief Customer Officer', linkedIn: 'https://www.linkedin.com/in/heatherengen', rep: 'Andy Lipski' },
    { name: 'Hilary Gronberg', category: 'tsia1', company: 'MongoDB', title: 'Director Professional Services', linkedIn: 'https://www.linkedin.com/in/hilary-gronberg', rep: 'Gil Ramirez' },
    { name: 'Joe Marruchella', category: 'tsia1', company: 'Alteryx', title: 'VP Professional Services', linkedIn: 'https://www.linkedin.com/in/josephmarruchella', rep: 'Matt Lyman' },
    { name: 'Lisa James', category: 'tsia1', company: 'Relias', title: 'SVP Professional Services', linkedIn: 'https://www.linkedin.com/in/ljames1', rep: 'Brandon Stevenett' },
    { name: 'Marc Winans', category: 'tsia1', company: 'Hitachi Vantara', title: 'Director Global Services', linkedIn: 'https://linkedin.com/in/marc-winans-9a72941', rep: 'Matt Lyman' },
    { name: 'Mayowa Ige', category: 'tsia1', company: 'Optic', title: 'VP Customer Success', linkedIn: 'https://linkedin.com/in/mayowa-ige-12060860', rep: 'Matt Lyman' },
    { name: 'Monique Rupert', category: 'tsia1', company: 'RetailMeNot', title: 'SVP Professional Services', linkedIn: 'https://www.linkedin.com/in/moniquerupert', rep: 'Gil Ramirez' },
    { name: 'Nick Blades', category: 'tsia1', company: 'Phunware', title: 'VP Professional Services', linkedIn: 'https://www.linkedin.com/in/nick-blades-a4a29aa', rep: 'Andy Cagle' },
    { name: 'Paul Yaros', category: 'tsia1', company: 'Alteryx', title: 'Senior Director Services', linkedIn: 'https://www.linkedin.com/in/paulyaros', rep: 'Anders Capener' },
    { name: 'Robert DelPonte', category: 'tsia1', company: 'Digital.ai', title: 'VP Professional Services', linkedIn: 'https://www.linkedin.com/in/bob-delponte-1b6704', rep: 'Matt Lyman' },
    { name: 'Sebastien Gagne', category: 'tsia1', company: 'Shopify', title: 'Director Professional Services', linkedIn: 'https://www.linkedin.com/in/gagnesebastien', rep: 'Sarah Warner' },
    { name: 'Sonia Hawkins', category: 'tsia1', company: 'CallidusCloud', title: 'VP Services', linkedIn: 'https://www.linkedin.com/in/sonia-hawkins-b480a12b0', rep: 'Kaushik Shankar' },
    { name: 'Swati Chopra', category: 'tsia1', company: 'Sorenson', title: 'VP Customer Success', linkedIn: 'https://www.linkedin.com/in/swatichopra11', rep: 'Matt Lyman' },
    { name: 'Todd Crandall', category: 'tsia1', company: 'Intercom', title: 'Director Services', linkedIn: 'https://www.linkedin.com/in/toddcrandall', rep: 'Jack Griggs' },
    { name: 'Troy Baldwin', category: 'tsia1', company: 'Upland', title: 'VP Professional Services', linkedIn: 'https://www.linkedin.com/in/troy-baldwin-0b14931b', rep: 'Matt Lyman' },
    { name: 'Yvonne Chuang', category: 'tsia1', company: 'Cisco', title: 'Director Customer Success', linkedIn: 'https://www.linkedin.com/in/yvonnechuang', rep: 'Matt Lyman' },

    // TSIA Tier 2 (40 leaders)
    { name: 'Aaron Callahan', category: 'tsia2', company: 'PagerDuty', title: 'VP Professional Services', linkedIn: 'https://www.linkedin.com/in/aaroncallahan', rep: 'Sarah Warner' },
    { name: 'Amber Monroe', category: 'tsia2', company: 'Yext', title: 'VP Professional Services', linkedIn: 'https://linkedin.com/in/ambermonroe', rep: 'Anders Capener' },
    { name: 'Brian Ruffner', category: 'tsia2', company: 'Ping Identity', title: 'Director Services', linkedIn: 'https://www.linkedin.com/in/dr-brian-ruffner-30a976116', rep: 'Gil Ramirez' },
    { name: 'Carolyn Hardy', category: 'tsia2', company: 'TechData', title: 'VP Services', linkedIn: 'https://www.linkedin.com/in/carolynmcgeehardy', rep: 'Stephen Colomay' },
    { name: 'Chad Stoecker', category: 'tsia2', company: 'CrowdStrike', title: 'Senior Director Services', linkedIn: 'https://www.linkedin.com/in/chad-stoecker', rep: 'Sarah Warner' },
    { name: 'Corina Swaney', category: 'tsia2', company: 'Pendo', title: 'VP Services', linkedIn: 'https://www.linkedin.com/in/corinaswaney', rep: 'Robbie Chamness' },
    { name: 'Craig Seeney', category: 'tsia2', company: 'ON24', title: 'VP Professional Services', linkedIn: 'https://www.linkedin.com/in/craig-seeney-41696580', rep: 'Andy Cagle' },
    { name: 'Daniel Silva', category: 'tsia2', company: 'Khoros', title: 'Director Services', linkedIn: 'https://www.linkedin.com/in/dansilva04', rep: 'Anders Capener' },
    { name: 'Danielle Stallone', category: 'tsia2', company: 'Constant Contact', title: 'VP Services', linkedIn: 'https://www.linkedin.com/in/danielle-stallone', rep: 'Matt Lyman' },
    { name: 'Dave Lavanty', category: 'tsia2', company: 'SPS Commerce', title: 'Director Services', linkedIn: 'https://www.linkedin.com/in/davidlavanty', rep: 'Matt Lyman' },
    { name: 'Derek Wallace', category: 'tsia2', company: 'RetailMeNot', title: 'Senior Director Services', linkedIn: 'https://www.linkedin.com/in/derekwallace', rep: 'Matt Lyman' },
    { name: 'Desiree Tipuric', category: 'tsia2', company: 'Sprinklr', title: 'VP Professional Services', linkedIn: 'https://www.linkedin.com/in/desiree-christine-tipuric-1070b453/', rep: 'Denzeyl Morris' },
    { name: 'Drew Davis', category: 'tsia2', company: 'RingCentral', title: 'Director Services', linkedIn: 'https://www.linkedin.com/in/drewallendavis/', rep: 'Sarah Warner' },
    { name: 'Ed Tatman', category: 'tsia2', company: 'Dealertrack', title: 'VP Services', linkedIn: 'https://linkedin.com/in/edtatman', rep: 'Matt Lyman' },
    { name: 'Eric Lee', category: 'tsia2', company: 'Apptio', title: 'Director Services', linkedIn: 'https://www.linkedin.com/in/ericlee6/', rep: 'Gil Ramirez' },
    { name: 'Eric Panepinto', category: 'tsia2', company: 'Zuora', title: 'VP Professional Services', linkedIn: 'https://linkedin.com/in/ericpanepinto', rep: 'Andy Cagle' },
    { name: 'Flavia Rigamonti', category: 'tsia2', company: 'Sitecore', title: 'VP Services', linkedIn: 'https://www.linkedin.com/in/flaviar', rep: 'Gil Ramirez' },
    { name: 'Gregorie Dejonckheere', category: 'tsia2', company: 'DataBox', title: 'VP Services', linkedIn: 'https://linkedin.com/in/gregorie-dejonckheere', rep: 'Andy Cagle' },
    { name: 'Jaclyn Todd', category: 'tsia2', company: 'Avertium', title: 'SVP Professional Services', linkedIn: 'https://linkedin.com/in/jaclyntodd', rep: 'Anders Capener' },
    { name: 'Jason McGregor', category: 'tsia2', company: 'BrightEdge', title: 'VP Services', linkedIn: 'https://www.linkedin.com/in/jason-mcgregor-99097b12', rep: 'Robbie Chamness' },
    { name: 'Jeff Burkhart', category: 'tsia2', company: 'Act-On', title: 'VP Professional Services', linkedIn: 'https://www.linkedin.com/in/jeff-burkhart-pmp-99a4174', rep: 'Matt Lyman' },
    { name: 'Jeffrey Khaw', category: 'tsia2', company: 'Linamar', title: 'Director Services', linkedIn: 'https://www.linkedin.com/in/jeffrey-khaw-88b17221', rep: 'Matt Lyman' },
    { name: 'Jennifer Turgeon', category: 'tsia2', company: 'CoreWeave', title: 'VP Services', linkedIn: 'https://www.linkedin.com/in/jennifer-turgeon-2b126626', rep: 'Gil Ramirez' },
    { name: 'Jesper Cordes', category: 'tsia2', company: 'BrightTalk', title: 'Director Services', linkedIn: 'https://www.linkedin.com/in/jesper-cordes', rep: 'Geoff Gebhardt' },
    { name: 'Jitendra Joshi', category: 'tsia2', company: 'Bazaarvoice', title: 'VP Professional Services', linkedIn: 'https://www.linkedin.com/in/joshijitendra', rep: 'Gil Ramirez' },
    { name: 'Joshua Hoffert', category: 'tsia2', company: 'Ping Identity', title: 'Senior Director Services', linkedIn: 'https://www.linkedin.com/in/joshuahoffert', rep: 'Sarah Warner' },
    { name: 'Kylin Cao', category: 'tsia2', company: 'BigCommerce', title: 'Director Services', linkedIn: 'https://www.linkedin.com/in/kylincao', rep: 'Andy Cagle' },
    { name: 'Laura Repaci', category: 'tsia2', company: 'Frontify', title: 'VP Services', linkedIn: 'https://www.linkedin.com/in/laura-repaci', rep: 'Gil Ramirez' },
    { name: 'Lee Palmer', category: 'tsia2', company: 'WalkMe', title: 'Director Services', linkedIn: 'https://www.linkedin.com/in/lee-palmer-136593', rep: 'Matt Lyman' },
    { name: 'Lisa Haag', category: 'tsia2', company: 'Logz.io', title: 'VP Professional Services', linkedIn: 'https://linkedin.com/in/lisa-haag', rep: 'Tanner DeVinny' },
    { name: 'Mansuk Suh', category: 'tsia2', company: 'Opinary', title: 'Director Services', linkedIn: 'https://www.linkedin.com/in/mansuk', rep: 'Andy Cagle' },
    { name: 'Sadie Brackin', category: 'tsia2', company: 'Planview', title: 'VP Services', linkedIn: 'https://linkedin.com/in/sadie-brackin', rep: 'Robbie Chamness' },
    { name: 'Scott Cravotta', category: 'tsia2', company: 'LivePerson', title: 'Director Services', linkedIn: 'https://linkedin.com/in/scott-cravotta-31b4843', rep: 'Matt Lyman' },
    { name: 'Scott MacPhee', category: 'tsia2', company: 'Domo', title: 'VP Professional Services', linkedIn: 'https://linkedin.com/in/scott-macphee-215a756', rep: 'Robbie Chamness' },
    { name: 'Sofia Barbosa', category: 'tsia2', company: 'ZoomInfo', title: 'Director Services', linkedIn: 'https://www.linkedin.com/in/sofiabarbosa', rep: 'Robbie Chamness' },
    { name: 'Steve Spence', category: 'tsia2', company: 'Apptio', title: 'Senior Director Services', linkedIn: 'https://www.linkedin.com/in/stephenspence0000', rep: 'Andy Cagle' },
    { name: 'Terri Olson-Stepp', category: 'tsia2', company: 'BigCommerce', title: 'VP Services', linkedIn: 'https://linkedin.com/in/terriolsonstepp', rep: 'Andy Cagle' },
    { name: 'Tiago Eliseu', category: 'tsia2', company: 'Bazaarvoice', title: 'Director Services', linkedIn: 'https://www.linkedin.com/in/tiago-eliseu/', rep: 'Andy Cagle' },
    { name: 'Tonia Whitton', category: 'tsia2', company: 'WalkMe', title: 'VP Professional Services', linkedIn: 'https://www.linkedin.com/in/tonia-whitton-b95678', rep: 'Stephen Colomay' },
    { name: 'Yogesh Jankee', category: 'tsia2', company: 'RetailMeNot', title: 'Director Services', linkedIn: 'https://www.linkedin.com/in/yogeshjankee', rep: 'Jessica Langrock' },

    // PropelX (10 leaders)
    { name: 'Gerard Allen', category: 'propelx', company: 'SailPoint', title: 'SVP Global Services', linkedIn: 'https://linkedin.com/in/gerard-allen', rep: 'Add Rep Name' },
    { name: 'Grant Watling', category: 'propelx', company: 'LogicMonitor', title: 'VP Global Services', linkedIn: 'https://linkedin.com/in/grantwatling', rep: 'Add Rep Name' },
    { name: 'Hendrik Zondag', category: 'propelx', company: 'SolarWinds', title: 'VP Professional Services', linkedIn: 'https://linkedin.com/in/hendrik-zondag', rep: 'Add Rep Name' },
    { name: 'Kerri Geddes', category: 'propelx', company: 'UiPath', title: 'VP Professional Services', linkedIn: 'https://linkedin.com/in/kerri-geddes', rep: 'Add Rep Name' },
    { name: 'Liam Miner', category: 'propelx', company: 'ServiceTitan', title: 'Director Services', linkedIn: 'https://linkedin.com/in/liamminer', rep: 'Add Rep Name' },
    { name: 'Olivier Laarhoven', category: 'propelx', company: 'Avalara', title: 'VP Global Services', linkedIn: 'https://linkedin.com/in/olivier-laarhoven', rep: 'Add Rep Name' },
    { name: 'Rui Vieira', category: 'propelx', company: 'OutSystems', title: 'VP Professional Services', linkedIn: 'https://linkedin.com/in/ruivieira', rep: 'Add Rep Name' },
    { name: 'Steff Johnston', category: 'propelx', company: 'Varonis', title: 'Director Professional Services', linkedIn: 'https://linkedin.com/in/steff-johnston', rep: 'Add Rep Name' },
    { name: 'Sukanya Kuppuswamy', category: 'propelx', company: 'Thought Industries', title: 'VP Professional Services', linkedIn: 'https://linkedin.com/in/sukanya-kuppuswamy', rep: 'Add Rep Name' },
    { name: 'Vidya Macleod', category: 'propelx', company: 'Okta', title: 'Director Customer Success', linkedIn: 'https://linkedin.com/in/vidya-macleod', rep: 'Add Rep Name' }
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
