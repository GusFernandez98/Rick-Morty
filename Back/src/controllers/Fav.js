let myFavorites = [];

const postFav = (req, res) => {
    const { id, name, status, species, gender, origin, image } = req.body;
    try {
       if( !id || !name || !image) res.status(404).json({ message: "The require information is missing" });
       const character =  { id, name, status, species, gender, origin, image };
       myFavorites.push(character);
       res.status(200).json(myFavorites);
    } catch (error) {
        res.status(404).json({ message: error});
    }
};

const deleteFav = (req, res) => {
    const { id } = req.params;
    try {
        if(!id) res.status(404).json({ message: "id not found"});
        const newFavs = myFavorites.filter(char => char.id !== Number(id));
        myFavorites = newFavs;
        res.status(200).json(myFavorites);
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

module.exports = {
    postFav,
    deleteFav
};



// function deleteFav(req, res) {
//     const { id } = req.params;
//     try {
//       if (!id) {
//         return res.status(STATUS_ERROR).json({ message: "id not found" });
//       }
//       const newFavorites = myFavorites.filter((ch) => ch.id !== Number(id));
//       myFavorites = newFavorites;
//       res.status(STATUS_OK).json(myFavorites);
//     } catch (error) {
//       res.status(STATUS_ERROR).json({ message: error });
//     }
//   }