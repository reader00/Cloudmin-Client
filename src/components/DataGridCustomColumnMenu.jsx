import { GridColumnMenu } from '@mui/x-data-grid';

const CostumColumnMenu = (props) => {
    // const { hideMenu, currentColumn, open } = props;

    return (
        <GridColumnMenu
            {...props}
            components={{
                ColumnMenuColumnsItem: null,
                columnMenuSortItem: null,
            }}
        />
    );
};

export default CostumColumnMenu;
