import { SearchBox } from "@fluentui/react-search-preview";
import {
  Field,
  makeStyles,
  shorthands,
  tokens,
} from "@fluentui/react-components";

const useAppSearchStyles = makeStyles({
  fieldWrapper: {
    ...shorthands.padding(
      tokens.spacingVerticalMNudge,
      tokens.spacingHorizontalMNudge
    ),
  },
});

export default function AppSeach({ value, setValue }: any) {
  const styles = useAppSearchStyles();
  return (

      <SearchBox
      style={{flex: 1}}
        appearance="outline"
        value={value}
        placeholder="Search..."
        onChange={(e: any) => setValue(e.target.value as any)}
      />

  );
}
