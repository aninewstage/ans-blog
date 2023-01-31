export default (category) => {
    function hasParentCategory(category) {
        return (
            (category?.parent_category?.slug === undefined
                ? ""
                : category?.parent_category?.name) +
            "/" +
            (category?.parent_category?.slug === undefined
                ? category?.name
                : category?.slug)
        );
    }

    if (category === undefined) {
        return false;
    }

    return hasParentCategory(category);
}