const getAddDisorderForm = (req, res) => {
    res.render('add-disorder', {
        title: 'Add new disorder'
    });
};

const createNewDisorder = async (req, res) => {
    try {
        const { title, description } = req.body;

        if (!title || !description) {
            return res.status(400).send(
                'Title and description are required!! Dont be lazy..'
            );
    }

        const newDisorder = await disorderService.createDisorder(
            title,
            description
    );

    res.redirect(`/disorder/${newDisorder.issue_id}`);
} catch (error) {
     console.error('Error creating.. try again or smt idk man', error);
     res.status(500).send(
         'An error occurred, haha loserrrrr sorry okay uhm yeah.. dont hop on JJS on roblox'
    );
 }
}; 

module.exports = {
    getAddDisorderForm,
    createNewDisorder
};