import axios from "axios";

export default axios.create({
	baseURL: "https://api.yelp.com/v3/businesses",
	headers: {
		Authorization:
			"Bearer rx8_yp87-0eN8cnG-0d202YbSXIVcus8cAW9r6vFyZmAAgxpIFJ3tM-xFedacz5envbddBeHp_aeyCYs6GxjQMn8bCkFIQR-EMM_lTxsfFsHQSD3-pf0s_9jpo8MYnYx",
	},
});
