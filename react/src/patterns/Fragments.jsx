import React from "react";

// A component must return a SINGLE root element. Wrapping everything
// in an extra <div> just to satisfy that rule adds a meaningless node
// to the DOM (can break CSS like flex/grid layouts relying on direct
// children). <React.Fragment> (or the <>...</> shorthand) groups
// multiple elements WITHOUT adding any real DOM node.
const TableRow = () => {
  return (
    // Using the shorthand <>...</>. If you need a "key" (e.g. inside
    // a .map()), you must use the full <React.Fragment key={...}> form
    // instead, since the shorthand can't take props.
    <>
      <td>Cell A</td>
      <td>Cell B</td>
    </>
  );
};

const FragmentsExample = () => {
  return (
    <table>
      <tbody>
        <tr>
          {/* Without a Fragment here, TableRow would need to wrap its
              <td>s in a <div>, which is invalid inside a <tr> and
              would break the table layout. */}
          <TableRow />
        </tr>
      </tbody>
    </table>
  );
};

export default FragmentsExample;
