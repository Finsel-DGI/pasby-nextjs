import * as React from "react";

const variantStyle = {
  original: {
    fill: '#dd3e3e',
    text: '#fff'
  },
  dark: {
    text: '#fff',
    fill: '#000'
  },
  darktext: {
    fill: '#fff',
    text: '#000'
  },
  light: {
    text: '#dd3e3e',
    fill: '#fff'
  },
};

type LogoVariant = 'original' | 'dark' | 'darktext' | 'light' | undefined;

export function Logo({
  variant,
  height,
  width,
  coloring,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  variant?: LogoVariant,
  coloring?: { fill: string, text: string },
  width?: number
  height?: number
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? 512}
      height={height ?? 514}
      fill="none"
      viewBox="0 0 512 514"
      {...props}
    >
      <path
        fill={coloring ? coloring.fill : variantStyle[variant ?? 'original'].fill}
        d="M81.186 440.347A163.634 163.634 0 018.252 318.611L.682 235.874a163.636 163.636 0 0149.71-133.033l59.794-57.325A163.637 163.637 0 01245.26 1.464l82.203 11.065a163.636 163.636 0 01118.542 78.076l42.731 71.325a163.633 163.633 0 0112.919 141.354l-29.023 77.701a163.633 163.633 0 01-102.563 98.317l-78.753 25.679a163.633 163.633 0 01-140.75-18.927z"
      ></path>
      <g fill={coloring ? coloring.text : variantStyle[variant ?? 'original'].text}>
        <path d="M177.416 152.188c6.421 0 12.242 1.533 17.464 4.599 5.308 2.978 9.46 7.225 12.456 12.743 2.997 5.431 4.495 11.78 4.495 19.05s-1.498 13.663-4.495 19.181c-2.996 5.43-7.148 9.678-12.456 12.744-5.222 2.978-11.043 4.467-17.464 4.467-8.109 0-20.803 6.568-20.803 14.677v.684a9.075 9.075 0 01-9.075 9.075h-.941c-5.532 0-10.017-4.485-10.017-10.017v-76.585c0-5.283 4.284-9.566 9.567-9.566h7.437a2.13 2.13 0 012.13 2.13c0 2.007 2.712 3.052 4.327 1.859 4.548-3.36 10.34-5.041 17.375-5.041zm-3.467 55.967c5.136 0 9.331-1.751 12.584-5.255 3.339-3.591 5.008-8.364 5.008-14.32s-1.669-10.685-5.008-14.189c-3.253-3.591-7.448-5.386-12.584-5.386-5.137 0-9.374 1.795-12.713 5.386-3.253 3.504-4.88 8.233-4.88 14.189s1.627 10.729 4.88 14.32c3.339 3.504 7.576 5.255 12.713 5.255zM285.339 153.24c5.532 0 10.016 4.484 10.016 10.016v51.098c0 5.283-4.283 9.567-9.567 9.567h-7.436a2.13 2.13 0 01-2.131-2.131c0-2.007-2.71-3.05-4.323-1.855-4.531 3.358-10.281 5.037-17.25 5.037-6.506 0-12.414-1.489-17.721-4.467-5.222-2.978-9.332-7.226-12.328-12.744s-4.494-11.911-4.494-19.181 1.498-13.663 4.494-19.181 7.106-9.766 12.328-12.744c5.307-2.978 11.215-4.467 17.721-4.467 6.654 0 12.211 1.621 16.671 4.863 1.526 1.109 4.003.117 4.003-1.77 0-1.127.914-2.041 2.042-2.041zm-27.224 54.915c5.051 0 9.246-1.751 12.585-5.255 3.338-3.591 5.008-8.364 5.008-14.32s-1.67-10.685-5.008-14.189c-3.339-3.591-7.534-5.386-12.585-5.386-5.137 0-9.374 1.795-12.713 5.386-3.339 3.504-5.008 8.233-5.008 14.189s1.669 10.729 5.008 14.32c3.339 3.504 7.576 5.255 12.713 5.255zM337.145 224.972a67.595 67.595 0 01-16.823-2.103c-2.616-.711-4.979-1.502-7.088-2.372-3.625-1.497-4.823-5.761-3.202-9.333 2.035-4.483 7.64-6.108 12.273-4.445.893.32 1.815.624 2.769.911 4.366 1.226 8.646 1.839 12.841 1.839 8.475 0 12.713-2.146 12.713-6.437 0-2.015-1.156-3.46-3.467-4.336-2.312-.876-5.864-1.62-10.658-2.233-5.651-.876-10.316-1.883-13.998-3.022-3.681-1.139-6.891-3.153-9.631-6.043-2.653-2.891-3.98-7.007-3.98-12.35 0-4.467 1.241-8.408 3.724-11.824 2.568-3.503 6.249-6.218 11.043-8.145 4.88-1.927 10.616-2.891 17.208-2.891 4.879 0 9.716.57 14.51 1.708 1.993.43 3.843.932 5.55 1.507 3.878 1.307 5.237 5.764 3.533 9.485-1.979 4.323-7.249 5.914-11.796 4.524-3.75-1.147-7.683-1.721-11.797-1.721-4.281 0-7.491.613-9.631 1.839-2.141 1.226-3.211 2.803-3.211 4.73 0 2.19 1.156 3.722 3.467 4.598 2.312.876 5.993 1.708 11.044 2.496 5.65.964 10.273 2.015 13.869 3.153 3.595 1.051 6.72 3.022 9.374 5.912 2.654 2.891 3.981 6.919 3.981 12.087 0 4.379-1.284 8.277-3.853 11.693-2.568 3.415-6.335 6.087-11.3 8.014-4.88 1.839-10.701 2.759-17.464 2.759zM329.16 342.616a268.651 268.651 0 01.954.866c2.081 2.01 3.436 4.882 4.05 7.704l.064.294c.185.922.215 1.821.211 2.761l-.002.472c-.014 1.215-.113 2.362-.393 3.542l-.056.251c-.51 2.213-1.509 4.33-2.922 6.087l-.153.192c-2.376 2.923-6.043 4.804-9.718 5.259-1.922.157-3.856.123-5.736-.332a14.547 14.547 0 01-9.19-6.505c-2.112-3.577-3.071-8.099-2.107-12.212.068-.263.141-.524.218-.784l.075-.264c1.182-4.024 3.922-7.314 7.499-9.333 5.596-2.983 12.417-2.13 17.206 2.002zm-20.059 7.307c-.222.168-.398.415-.379.693a.97.97 0 00.268.574.832.832 0 00.31.216c.193.078.408.077.617.073l.072-.002.418-.004.436-.013.441-.007c.256-.004.511-.009.767-.015.17-.004.31.133.309.303-.008.968-.013 1.937-.017 2.905-.001.498-.004.996-.008 1.494-.004.48-.006.961-.007 1.441l-.004.55-.003.771-.002.442c.023.204.055.347.115.476.135.288.418.515.736.492a1.01 1.01 0 00.613-.257.657.657 0 00.062-.068c.177-.228.21-.536.215-.824.002-.089 0-.192-.003-.372v-.242c0-.262-.002-.525-.004-.787l-.001-.547c-.001-.48-.003-.959-.006-1.438l-.004-1.468c-.003-.868-.006-1.735-.011-2.602 0-.151.125-.273.276-.268.414.013.828.021 1.242.029l.435.015.419.006.386.01c.362-.041.362-.041.621-.354.062-.086.107-.149.139-.203.175-.294.055-.713-.196-.946-.263-.244-.643-.326-1.002-.325l-.209.003-.449-.005-.483.001-.498-.001c-.347-.002-.694-.001-1.042 0-.444.001-.888-.001-1.333-.005-.342-.002-.685-.002-1.027-.001l-.492-.002a39.332 39.332 0 00-.687.001h-.126c-.179 0-.36.008-.53.063-.143.048-.26.111-.374.198zm10.547-.047a1.17 1.17 0 00-.486.808c-.035.28-.026.564-.027.854l-.001.253-.001.827-.002.575v1.206c0 .514-.002 1.029-.004 1.543l-.002 1.189-.001.569v.796l-.001.458c.022.301.064.527.162.773.062.159.183.322.317.426.233.181.549.159.807.018a1.001 1.001 0 00.509-.745c.034-.224.042-.449.046-.689a42.965 42.965 0 00.013-.766l.008-.407.022-1.289.015-.875.02-1.126a.355.355 0 01.637-.211l.175.226c.386.503.762 1.012 1.133 1.526.123.171.243.361.421.472.264.163.621.099.899-.037.171-.083.287-.213.475-.448l.27-.332.296-.384.355-.456c.233-.301.465-.604.694-.908.11-.143.173-.227.219-.284.055-.07.163-.027.163.062.008.83.018 1.661.029 2.491.004.31.008.62.01.93.004.445.011.891.017 1.336l.003.421.007.391.001.104c.002.16.008.323.055.476.018.056.038.107.062.156.142.295.427.535.754.506.21-.018.433-.103.59-.245a.609.609 0 00.074-.079c.177-.227.205-.536.215-.823.003-.108.002-.226-.001-.455l.001-.268v-.875l.001-.61-.002-1.276c-.001-.545 0-1.09.001-1.635v-1.258l.001-.603-.002-.843-.001-.484a2.748 2.748 0 00-.054-.416c-.079-.337-.325-.645-.667-.692a.995.995 0 00-.586.112c-.18.096-.291.222-.465.434l-.247.299c-.424.538-.841 1.079-1.255 1.624l-.074.096c-.697.91-2.021.964-2.735.068a72.91 72.91 0 01-1.613-2.064 3.785 3.785 0 00-.188-.204c-.287-.289-.726-.467-1.062-.238zM177.416 280.281c6.421 0 12.242 1.533 17.464 4.599 5.308 2.978 9.46 7.225 12.456 12.743 2.997 5.43 4.495 11.78 4.495 19.05 0 7.269-1.498 13.663-4.495 19.181-2.996 5.43-7.148 9.678-12.456 12.744-5.222 2.978-11.043 4.466-17.464 4.466-7.035 0-12.827-1.68-17.375-5.04-1.615-1.193-4.327-.148-4.327 1.859a2.13 2.13 0 01-2.13 2.13h-7.437c-5.283 0-9.567-4.283-9.567-9.566v-77.899c0-5.532 4.485-10.017 10.017-10.017h.58a9.436 9.436 0 019.436 9.436v1.637c0 8.109 12.694 14.677 20.803 14.677zm-3.467 55.967c5.136 0 9.331-1.752 12.584-5.255 3.339-3.591 5.008-8.364 5.008-14.32s-1.669-10.685-5.008-14.189c-3.253-3.591-7.448-5.386-12.584-5.386-5.137 0-9.374 1.795-12.713 5.386-3.253 3.504-4.88 8.233-4.88 14.189s1.627 10.729 4.88 14.32c3.339 3.503 7.576 5.255 12.713 5.255zM284.825 281.332c5.532 0 10.016 4.485 10.016 10.017v48.84c0 12.963-3.21 22.597-9.631 28.903-6.42 6.307-15.752 9.46-27.994 9.46-6.506 0-12.67-.832-18.491-2.496-3.237-.939-6.187-2.115-8.851-3.528-3.463-1.837-4.304-6.206-2.438-9.654 2.446-4.519 8.52-5.646 13.295-3.746.682.272 1.383.528 2.103.768 4.195 1.401 8.432 2.102 12.713 2.102 6.677 0 11.557-1.576 14.639-4.729 3.082-3.154 4.623-7.971 4.623-14.452 0-.864-1.07-1.311-1.727-.751-2.174 1.854-4.637 3.33-7.391 4.43-3.51 1.401-7.276 2.102-11.3 2.102-9.075 0-16.266-2.628-21.574-7.883-5.307-5.343-7.961-13.313-7.961-23.911v-25.455c0-5.532 4.484-10.017 10.016-10.017s10.016 4.485 10.016 10.017v22.434c0 11.473 4.666 17.21 13.997 17.21 4.795 0 8.647-1.576 11.558-4.73 2.91-3.24 4.366-8.014 4.366-14.32v-20.594c0-5.532 4.484-10.017 10.016-10.017z"></path>
      </g>
    </svg>
  );
}

export function WordMark({ color = "#000", className, ...props }: {
  color?: string
  className?: string
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="128"
      height="36"
      fill="none"
      className={className}
      viewBox="0 0 256 73" {...props}
    >
      <path
        fill={color}
        d="M26.105 14.575c3.777 0 7.196.89 10.258 2.671 3.114 1.73 5.563 4.223 7.35 7.479 1.837 3.205 2.755 6.944 2.755 11.218 0 4.273-.918 8.038-2.756 11.294-1.786 3.205-4.236 5.698-7.349 7.478-3.062 1.73-6.481 2.595-10.258 2.595-1.022 0-2-.064-2.933-.193-3.544-.49-8.627 2.023-8.627 5.6v4.71a4 4 0 01-4 4H4a4 4 0 01-4-4V19.263a4 4 0 014-4h8.753c.61 0 1.103.494 1.103 1.104 0 1.028 1.373 1.572 2.208.97 2.555-1.84 5.902-2.76 10.041-2.76zm-3.062 31.212c2.552 0 4.644-.865 6.277-2.595 1.633-1.78 2.45-4.197 2.45-7.25 0-3.052-.817-5.443-2.45-7.172-1.633-1.781-3.725-2.671-6.277-2.671s-4.644.89-6.278 2.67c-1.633 1.73-2.45 4.121-2.45 7.174 0 3.052.817 5.469 2.45 7.25 1.634 1.73 3.726 2.594 6.278 2.594zM93.095 15.262a4 4 0 014 4v33.361a4 4 0 01-4 4h-8.753c-.61 0-1.103-.494-1.103-1.103 0-1.028-1.373-1.572-2.208-.971-2.556 1.84-5.903 2.761-10.041 2.761-3.777 0-7.222-.865-10.335-2.595-3.062-1.78-5.512-4.299-7.35-7.554-1.785-3.256-2.679-7.021-2.679-11.294 0-4.274.894-8.013 2.68-11.218 1.837-3.256 4.287-5.75 7.349-7.479 3.113-1.73 6.558-2.595 10.335-2.595 3.85 0 7.056.88 9.614 2.64.768.53 1.945.023 1.945-.91 0-.576.467-1.043 1.043-1.043h9.503zM74.052 45.787c2.552 0 4.644-.865 6.277-2.595 1.634-1.78 2.45-4.222 2.45-7.325 0-3.053-.816-5.444-2.45-7.174-1.633-1.73-3.725-2.594-6.277-2.594s-4.644.864-6.278 2.594c-1.633 1.73-2.45 4.121-2.45 7.174 0 3.103.817 5.545 2.45 7.325 1.634 1.73 3.726 2.595 6.278 2.595zM121.54 57.31c-3.471 0-6.89-.382-10.259-1.145-1.88-.454-3.553-.98-5.02-1.577-1.842-.75-2.5-2.903-1.699-4.724l1.114-2.533c.979-2.226 3.716-3.066 5.996-2.22.822.303 1.687.58 2.595.829 2.603.661 5.18.992 7.732.992 2.348 0 4.006-.23 4.976-.687 1.021-.509 1.531-1.221 1.531-2.137 0-.916-.612-1.552-1.837-1.908-1.174-.407-3.062-.788-5.665-1.144-3.318-.407-6.15-.941-8.498-1.603-2.296-.661-4.287-1.882-5.971-3.663-1.684-1.78-2.526-4.273-2.526-7.478 0-2.646.791-4.986 2.373-7.021 1.582-2.086 3.879-3.714 6.89-4.884 3.062-1.221 6.711-1.832 10.947-1.832 3.011 0 5.997.306 8.957.916 1.492.308 2.861.68 4.107 1.118 1.946.682 2.68 2.916 1.845 4.802l-1.119 2.523c-.952 2.147-3.537 2.981-5.761 2.227-2.522-.856-5.173-1.283-7.952-1.283-2.297 0-3.981.28-5.053.839-1.072.509-1.608 1.196-1.608 2.06 0 .967.587 1.654 1.761 2.06 1.174.357 3.113.739 5.818 1.146 3.42.508 6.252 1.093 8.498 1.755 2.245.661 4.185 1.882 5.818 3.663 1.684 1.73 2.526 4.171 2.526 7.325 0 2.595-.791 4.935-2.373 7.021-1.582 2.035-3.93 3.638-7.043 4.808-3.062 1.17-6.762 1.755-11.1 1.755zM174.429 14.575c3.777 0 7.196.865 10.258 2.595 3.114 1.73 5.563 4.223 7.35 7.479 1.837 3.205 2.756 6.944 2.756 11.218 0 4.273-.919 8.038-2.756 11.294-1.787 3.255-4.236 5.774-7.35 7.554-3.062 1.73-6.481 2.595-10.258 2.595-4.138 0-7.486-.92-10.041-2.761-.835-.601-2.208-.057-2.208.971 0 .61-.494 1.103-1.103 1.103h-8.753a4 4 0 01-4-4V4a4 4 0 014-4h6.545a4 4 0 014 4v5.09c0 3.578 5.11 6.135 8.657 5.668a22.213 22.213 0 012.903-.182zm-3.062 31.212c2.552 0 4.644-.865 6.277-2.595 1.634-1.78 2.45-4.222 2.45-7.325 0-3.053-.816-5.444-2.45-7.174-1.633-1.73-3.725-2.594-6.277-2.594s-4.644.864-6.278 2.594c-1.633 1.73-2.449 4.121-2.449 7.174 0 3.103.816 5.545 2.449 7.325 1.634 1.73 3.726 2.595 6.278 2.595zM241.189 15.262a4 4 0 014 4v29.806c0 7.682-2.067 13.431-6.201 17.247-4.083 3.866-9.977 5.8-17.684 5.8-4.032 0-7.808-.458-11.33-1.374-2.184-.577-4.167-1.324-5.947-2.243-1.759-.909-2.257-3.101-1.342-4.858l1.387-2.666c1.182-2.271 4.212-2.867 6.578-1.889.588.244 1.205.466 1.85.667 2.501.814 4.977 1.221 7.426 1.221 3.675 0 6.38-.84 8.115-2.518 1.735-1.68 2.603-4.172 2.603-7.479 0-.346-.418-.528-.682-.304-2.991 2.543-6.643 3.815-10.954 3.815-5.359 0-9.646-1.578-12.862-4.732-3.164-3.154-4.746-7.885-4.746-14.194V19.262a4 4 0 014-4h6.545a4 4 0 014 4v13.934c0 3.154.587 5.443 1.761 6.868 1.174 1.424 2.884 2.136 5.129 2.136 2.297 0 4.16-.814 5.589-2.442 1.48-1.628 2.22-4.07 2.22-7.326v-13.17a4 4 0 014-4h6.545zM254.134 4.913a44.769 44.769 0 00.337.3c.734.694 1.212 1.687 1.429 2.663l.022.101c.066.32.076.63.075.955l-.001.163c-.005.42-.04.816-.139 1.225l-.019.086a5.225 5.225 0 01-1.032 2.105l-.054.066c-.838 1.01-2.132 1.66-3.429 1.818-.678.055-1.36.043-2.024-.114l-.087-.02a5.129 5.129 0 01-3.156-2.23c-.745-1.236-1.084-2.8-.744-4.221.024-.091.05-.181.077-.271l.027-.092c.417-1.39 1.384-2.528 2.646-3.226 1.975-1.032 4.382-.737 6.072.692zm-7.079 2.526c-.078.058-.14.143-.133.24a.33.33 0 00.094.198.3.3 0 00.109.075.564.564 0 00.218.025h.025l.148-.002.154-.005.156-.002.27-.005c.06-.002.11.046.109.105l-.006 1.004-.002.516c-.002.166-.003.333-.003.499l-.001.19-.001.266-.001.153c.008.07.019.12.04.165.048.1.148.178.26.17a.359.359 0 00.238-.113c.063-.078.075-.185.076-.284.001-.031 0-.067-.001-.13v-.083l-.001-.272-.001-.19-.002-.496-.001-.508-.004-.9c0-.052.044-.094.097-.092.146.005.292.007.439.01l.153.005.148.002.136.004c.128-.014.128-.014.22-.123.021-.03.037-.051.048-.07.062-.102.02-.246-.069-.327a.52.52 0 00-.353-.112H249.381a142.157 142.157 0 00-.346-.001h-.367l-.471-.001a42.825 42.825 0 00-.536-.002h-.287a.609.609 0 00-.187.023.446.446 0 00-.132.068zm3.722-.016a.402.402 0 00-.171.28c-.013.096-.009.194-.01.294v.088l-.001.286v.615l-.002.534v.41l-.001.198V10.56a.852.852 0 00.057.268.371.371 0 00.112.147c.082.062.194.055.285.006a.34.34 0 00.179-.257c.013-.078.015-.156.017-.239l.002-.128.002-.136.003-.141.008-.446.005-.302.007-.39c.002-.116.152-.165.225-.073l.062.079c.136.173.269.35.399.527.044.059.086.125.149.163.093.057.219.034.317-.013a.502.502 0 00.168-.154l.095-.115.104-.133.126-.158c.082-.104.164-.208.245-.314l.077-.098c.02-.024.057-.01.058.022.002.287.006.574.01.86l.004.322.006.462v.146l.003.135v.036a.57.57 0 00.02.165.41.41 0 00.021.053c.051.102.151.185.267.175a.372.372 0 00.208-.084.23.23 0 00.026-.028c.062-.078.072-.185.076-.284.001-.038 0-.078-.001-.157l.001-.093v-.303-.21-.442a53.272 53.272 0 010-.565V8.43v-.208l-.001-.292v-.167a.891.891 0 00-.019-.144c-.028-.116-.115-.223-.235-.24a.356.356 0 00-.207.04.523.523 0 00-.164.15 9.202 9.202 0 00-.087.103c-.15.186-.297.373-.443.561l-.026.034a.616.616 0 01-.966.023l-.078-.096a24.283 24.283 0 01-.491-.617 1.325 1.325 0 00-.066-.071c-.102-.1-.256-.162-.375-.082z"
      ></path>
    </svg>
  )
}