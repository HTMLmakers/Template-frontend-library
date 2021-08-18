import React from "react";

const colorsList = [
  {
    name: 'Brand',
    scales: [
      {
        name: 'Blue Scale',
        colors: [
          '$color-blue-primary',
          '$color-blue-secondary',
          '$color-blue-tertiary',
          '$color-blue-quaternary',
          '$color-blue-quinary',
        ],
      },
      {
        name: 'Blue Light Scale',
        colors: [
          '$color-blue-light-primary',
          '$color-blue-light-secondary',
          '$color-blue-light-tertiary',
          '$color-blue-light-quaternary',
          '$color-blue-light-quinary',
        ],
      },
      {
        name: 'Blue Dark Scale',
        colors: [
          '$color-blue-dark-primary',
          '$color-blue-dark-secondary',
        ],
      },
    ],
  },
  {
    name: 'Gray',
    scales: [
      {
        name: 'Gray Scale',
        colors: [
          '$color-gray-primary',
          '$color-gray-secondary',
          '$color-gray-tertiary',
          '$color-gray-quaternary',
        ],
      },
    ],
  },
  {
    name: 'Additional',
    scales: [
      {
        name: 'Orange Scale',
        colors: [
          '$color-orange-primary',
          '$color-orange-secondary',
          '$color-orange-tertiary',
          '$color-orange-quaternary',
          '$color-orange-quinary',
        ],
      },
      {
        name: 'Yellow Scale',
        colors: [
          '$color-yellow-primary',
          '$color-yellow-secondary',
          '$color-yellow-tertiary',
          '$color-yellow-quaternary',
          '$color-yellow-quinary',
        ],
      },
      {
        name: 'Green Scale',
        colors: [
          '$color-green-primary',
          '$color-green-secondary',
          '$color-green-tertiary',
          '$color-green-quaternary',
          '$color-green-quinary',
        ],
      },
      {
        name: 'Azure Scale',
        colors: [
          '$color-azure-primary',
          '$color-azure-secondary',
          '$color-azure-tertiary',
          '$color-azure-quaternary',
          '$color-azure-quinary',
        ],
      },
      {
        name: 'Velvet Scale',
        colors: [
          '$color-velvet-primary',
          '$color-velvet-secondary',
          '$color-velvet-tertiary',
          '$color-velvet-quaternary',
          '$color-velvet-quinary',
        ],
      },
      {
        name: 'Red Scale',
        colors: [
          '$color-red-primary',
          '$color-red-secondary',
          '$color-red-tertiary',
          '$color-red-quaternary',
          '$color-red-quinary',
        ],
      },
    ],
  },
  {
    name: 'Base',
    scales: [
      {
        name: 'Base Scale',
        colors: [
          '$color-white',
          '$color-black',
        ],
      },
    ],
  },
];

const ColorItem = ({ item }) => {
  return item.scales.map(((scale, index) => {
    return (
      <>
        <thead>
          <tr>
            <th className="name">{index === 0 && item.name}</th>
            <th><small>{scale.name}</small></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>
              <ul className="colors-library__list">
                {scale.colors.map(color => {
                  return (
                    <li className="colors-library__item">
                      <div className="color" data-color={color}>
                        <div className="color__bg" />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </>
    );
  }));
};

const rendersColors = () => {
  return colorsList.map(item => {
    return <ColorItem item={item} />
  })
};

const ColorsPartial = () => {
  return (
    <section className="components-library__element colors-library">
      <h3 className="components-library__heading h3">
        Colors
      </h3>

      <table className="components-library__type">
        {rendersColors(colorsList)}
      </table>
    </section>
  )
};

export default ColorsPartial;
