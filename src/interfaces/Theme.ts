/**
 * The theme interface.
 * 
 * The interface for defining the themes. Currently it only holds the name of the theme and
 * the background color of the SVG. Later this will be expanded to support the title text
 * colors as well.
 */
export interface Theme {
    name: Array<string>
    background: string
    title: string,
    subtitle: string
}