import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

function MultiRangeSlider(props) {
    return (
        <div>
            <CustomSlider
                value={props.value}
                onChange={props.onChange}
                min={props.min}
                max={props.max}
                defaultValue={[props.min, props.max]}
            />
        </div>
    );
}

const CustomSlider = styled(Slider)({
    color: "#1045FF",
    height: 8,
    "& .MuiSlider-rail": {
        opacity: 1,
        backgroundColor: "#F8F8FA",
    },
    "& .MuiSlider-thumb": {
        height: 16,
        width: 16,
        boxShadow: "0px 0px 0px 0px",
        "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
            boxShadow: "0px 0px 0px 0px",
        },
    },
});
export { MultiRangeSlider };
