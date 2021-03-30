let Q = [
        "Which statement is FALSE? A property manager must be licensed as an active real estate broker if he or she:",
        "A person manages a communuty assocatiation that has 250 units. This person is a salaried manager of the association. The manager does not arrange rentals for any of the unit owners. This person must: ",
        "A builder constructs a house on an owner's lot according to the plans and specifications of the owner. This is called:",
        "Which is NOT a Florida real estate license category?",
        "A Florida real estate sales associate license expired six(6) months ago. To reactivate the license, the associate must successfully complete a:",
        "A person must hold an active Florida real estate license if the person: ",
        "An applicant for a Florida sales associate license takes and passes the state examination. When can the associate start operating as a licensee?",
        "A spouse of a Nacvy officer has a real estate license in the state of Virginia. The service member is transferred to the Naval Air Station in Jacksonville. The spouse of the service member may apply for a: ",
        "A developer owns three () subdivision properties in the names of three (3) different entities. A sales associate may be employed by the owner-developer on a comission basis to sell lots in the three subdivisions if the associate is issued:",
        "The Florida Real Estate Commission determines there is a violation of Chapter 475 and suspends the license of a sales assocaite. This is an exercise of which power of the Commission?",
        "A Florida real estate sales associate's relationship with his or her employing real estate broker can be best descibed as:",
        "A transaction broker does NOT have which duty?",
        "A real estate broker has a single agent relationship with a seller. The brokerage firm and its associates do NOT have which duty?",
        "A real estate broker is a transaction broker for a buyer. A sales associate of the broker makes a misepresentation of a material fact that deceives the buyer. The buy relies on the information and, as a result of the reliance, suffers an economic loss. This misrepresentation is:",
        "Which statement is FALSE? A sales associate may be: ",
        "The Federal Communications Commision has adopted a TELEMARKETING SALES RULE to implement the Telephone Consumer Protection Act. Which statement is FALSE?",
        "A broker receives conflicting demands from a buyer and a seller for an earnest money deposit. The broker attempts to resolve the issue between the parties to the contract but is unsuccessful. The broker notifies the Commission of the conflictiong demands ten business days after the last party's demand. How many remaining business days does the broker have to institute a settlement procedure?",
        "A sales associate engages the services of an unlicensed personal assistant. The assistant may NOT: ",
        "A sales associate employs an unlicensed personal assistant. The assistant answers the phone, writes advertisements for the approval by the associate and the associate's supervising broker, and places the ads in the local newspaper. Which statement is TRUE?",
        "With regard to the Florida Real Estate Recovery Fund (Fund), which statement is TRUE?",
        "Who can collect from the Real Estate Recovery Fund? A person who suffered monetary damages from an act of a:",
        "When can a landlord commingle a tenant's deposit with his or her own funds?",
        "With respect to a homestead estate, which statement is FALSE?",
        "Which is NOT  a leasehold estate?",
        "Which is a voluntary alienation of legal title to real property?",
        "Regarding a quitclaim deed, which statement is FALSE?",
        "Which is True regarding a bargain-and-sale deed and a quitlcaim deed?"]

let A = [[".)is a salaried community association manager", ".)employs a sales associate to rent or lease real property", ".)collects and holds rental security deposits for a property owner", ".)is paid a compensation for renting or leasing real property"],
     [".)have a Community Association Manager (CAM) license", ".)be a Certified Property Manager (CPM) because there are more than 10 units", ".)hold a real estate broker license to perform these duties", ".)not hold any professional license because no rentals are arranged"],
     [".)custom building", ".)spec building", ".)stick building", ".)Tract building"],
     [".)Business broker", ".)Broker associate", ".)Broker", ".)Sales Associate"],
     [".)14-hour Comission-prescribed continuing education course", ".)28-hour Comission-prescribed education course", ".)28-hour Commission-prescribed reactivation education course", ".)45-hour post-licensing education course"],
     [".)furnishes a rental property information list for a fee", ".)leases apartment units in an onsite renatl office for a salary", ".)manages and rents individual units within a condominium complex for a salary", ".)rents mobile home lots in a mobile home park for a compensation"],
     [".)Upon registering an employer with the DBPR", ".)Upon receipt of a license from the DBPR", ".)Upon passing the state licensing examination", ".)Upon securing a position with a licensed real estate broker"],
     [".)temporary Florida real estate license for up to six (6) months", ".)Florida license under a reciprocity agreement between Florida and Virginia", ".)Florida license under a mutual recognition agreement with Virginia", ".)temporary Florida real estate license for up to one (1) year"],
     [".)a group license", ".)an owner-developor sales license", ".)multiple licenses", ".)a subdivision sales license"],
     [".)Quasi-Judicial", ".)Ministerial", ".)Judicial", ".)Quasi-Legislative"],
     [".)general agent", ".)limited agent", ".)special agent", ".)universal agent"],
     [".)Loyalty", ".)Disclose latent defects that materially afect the value of a residential property", ".)Present all offers and counteroffers ni a timely manner", ".)Use skill, care, and diligence in the transation"],
     [".)Limited confidentiality", ".)Full disclosure", ".)Loyalty", ".)Obedience"],
     [".)fraud", ".)culpable negligence", ".)a breach of trust", ".)unethical conduct"],
     [".)a general partner in a partnership brokerage business", ".)a limited partner in a limited partnership brokerage business", ".)a stockholder in a corporation brokerage business", ".)licensed as a professional corportation, limited liability company, or professional limited liability company."],
     [".)Violators under the federal law can be fined up to $10,000 for each illegal call", ".)A consumer may place his or her telephone number on a national do-not-call reistry", ".)Solicitors may not telephone a residence before 8:00 AM or after 9:00 PM", ".)A caller must identify their name, the business name, and the business telephone number."],
     [".)20", ".)15", ".)10", ".)30"],     
     [".)conduct a listing appointment for the associate", ".)hand out brochures at an open house for the associate", ".)place a FOR SALE sign on a listed property for the associate", ".)write an ad for the approval of the associate and the associate's supervisory broker"],
     [".)These are support services that can be performed by an unlicensed assistant", ".)The unlicensed assistant is operating without a current valid license with an active status", ".)This is legal provided only the broker directly pays the assistant for these services", ".)This is legal provided only the associate directly pays the assistant for these services."],
     [".)The Fund was established to reimburse a person who is damaged by a licensee", ".)Payments from the Fund are disbursed by order of the Secretary of the DBPR", ".)The Fund was established to idemnify licensees who hold an inactive status", ".)A claim may be paid from the Fund if a licensee had an inactive status when the violation occurred"],
     [".)licensee who had a valid, current license with an active status when the act was committed", ".)licensee who had an inactive license when the act was commmitted", ".)licensee who had not properly renewed the license when the act was committed", ".)person who has filed an application to become a licensed real estate sales associate"],
     [".)When the landlord posts a surety bond and pays the tenant at a 5% interst rate", ".)When the landlord pays the tenant 75% of the interst rate earned or 4% interest rate per year", ".)Never, commingling is a violation of the Florida Residential Landlord and Tenant Act", ".)With the written consent of the tenant and the landlord's agreement to pay the tenant 5% interest rate per year"],
     [".)A homestead estate protects a Florida resident's home from forced sle for nonpayment of a special assessment lien secured by the property", ".)A homestead estate may be up to 160 acres outside a municipality or up to one-half acre within a municipality", ".)A homeowner is entitled to a $25,000 standard exemption from ad valorem taxation for a permanent residence", ".)A person claiming a homestead estate must hold the legal or equitable title to the real estate and occupy the property as a permanent residence."],
     [".)Remainder estate", ".)Tenancy at a sufferance", ".)Tenancy at will", ".)Tenancy for years"],
     [".)Tax deed", ".)Condemnation proceeding", ".)Certificate of title", ".)Warranty deed"],
     [".)the grantor may use this type or deed if the contract does not specify a different deed.", ".)The deed provides the grantor the best assurance of no future liability", ".)The deed contatins no covenants or warranty of title", ".)The deed is used primarily to remove defects or clouds on the title"],
     [".)A bargain-and-sale deed has a covenant of seisin", ".)A bargain-and-sale deed contains a general warranty of title.", ".)A quitclaim deed cannot release a fee simple estate to a grantee", ".)A quiclaim deed contains a limited warranty or title."]]

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

let Qset = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]
let Aset = [0, 1, 2, 3]
let Score = 0
let x = 0;
let input;
let output;
let asetain = [];

// let evaluateAnswer = (input) => {
//         if (input == 0) {
//                 document.getElementById("lastResponse").innerHTML = ( "Correct!");
//                 Score = Score +1
//         }
//         if (input in [1, 2, 3]) {
//                 document.getElementById("question").innerHTML = ("Wrong! The correct Answer is: " + A[x][0]);
//         }
// }

shuffle(Qset);

// function takeAnswer(num) {
//         console.log(num);
//         return num;
// }

function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
}

function evaluateAnswer(input) {
        // console.log(Aset);
        // console.log(Aset.indexOf(0))
        // console.log('here' + asetain);
        console.log('Qset ' + Qset)
        console.log('length ' + Qset.length)
        console.log('qset[x] ' +Qset[x]);
        console.log('x ' + x);
        console.log('\n');
        Qset.shift();
        if (input == asetain.indexOf(0)) {
                document.getElementById("lastResponse").innerHTML = ( "Correct!");
                Score = Score +1
        }
        if (input != asetain.indexOf(0)) {
                document.getElementById("lastResponse").innerHTML = ("Wrong! The correct Answer is: " + A[x][0]);
        }

        x = getRandomInt(Qset.length);
        asetain = [];
        updateQuestion();
}

function updateQuestion() {
        if (Qset.length == 27) {
                document.getElementById("lastResponse").innerHTML = ( "Start!");
                document.getElementById("question").innerHTML = (Q[x])
                shuffle(Aset)
                console.log(Aset)
                for (let ain = 0; ain < 4; ain ++) {
                        let y = (Aset[ain])
                        document.getElementById(ain.toString()).innerHTML = A[x][y];
                        asetain.push(Aset[ain]);
                }
                
        }

        else if (Qset.length > 0 < 27) {
                document.getElementById("question").innerHTML = (Q[x])
                shuffle(Aset)
                for (let ain = 0; ain < 4; ain ++) {
                        let y = (Aset[ain])
                        document.getElementById(ain.toString()).innerHTML = A[x][y];
                        asetain.push(Aset[ain]);
                }
        }

        if (Qset.length <= 0) {
                let finalScore = (Score/27*100)
                document.getElementById("lastResponse").innerHTML = ("Your final score is:" + finalScore);
                document.getElementById("question").innerHTML = ("Refresh the browser to re-take the test");
        }
}

updateQuestion();



// while (Qset.length != 0){
//         let x = Qset.shift();
//         console.log(Q[x])
//         let InputA;

//         shuffle(Aset)
//         let ain = 0
//         for (let ain = 0; ain < 4; ain ++) {
//                 let y = (Aset[ain])
//                 document.getElementById(ain.toString()).innerHTML = A[x][y];
//         }
        
//         if (input == 0) {
//                 document.getElementById("lastResponse").innerHTML = ( "Correct!");
//                 Score = Score +1
//         }
//         if (input in [1, 2, 3]) {
//                 document.getElementById("question").innerHTML = ("Wrong! The correct Answer is: " + A[x][0]);
//         }
// }