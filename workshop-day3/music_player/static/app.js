/** @odoo-module**/

const { Component,xml,mount } = owl;

// class List extends Component {
//     static template = xml`
//         <div>

//         </div>
//     `;
//     static props = ['searchData'];
// }

class Search extends Component {
    static template = xml`
        <div style="border:1px solid black; text-align:center">
            <input type="text" id="searchSong" placeholder="Search Music" value="Freedom"/>
            <button t-on-click="getMusic" id="SearchButton">Search</button>
        </div>
    `;

    // setup() {
    //     this.searchData = useState([]);
    // }

    async getMusic() {
        const findSong = document.getElementById("searchSong").value;
        const response = await fetch(`/music/search?song_name=${findSong}`);
        console.log(response.body);
        const {result: newData} = await response.json();
        console.log(newData);
        // this.searchData.push(newData);
    }

    // static components = {List};
}

class Root extends Component {
    static template = xml`
    <div>
        <Search/>
    </div>
    `;

    static components = {Search};
}

window.onload = function() {
    mount(Root,document.body);
};