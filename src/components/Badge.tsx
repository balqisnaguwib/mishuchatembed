import { onCleanup, onMount } from 'solid-js';

type Props = {
  botContainer: HTMLDivElement | undefined;
  poweredByTextColor?: string;
  badgeBackgroundColor?: string;
};

const defaultTextColor = '#48c3db';
const disclaimerColor = '#808080';

export const Badge = (props: Props) => {
  let liteBadge: HTMLAnchorElement | undefined;
  let observer: MutationObserver | undefined;

  const appendBadgeIfNecessary = (mutations: MutationRecord[]) => {
    mutations.forEach((mutation) => {
      mutation.removedNodes.forEach((removedNode) => {
        if ('id' in removedNode && liteBadge && removedNode.id == 'lite-badge') {
          console.log("Sorry, you can't remove the brand 😅");
          props.botContainer?.append(liteBadge);
        }
      });
    });
  };

  onMount(() => {
    if (!document || !props.botContainer) return;
    observer = new MutationObserver(appendBadgeIfNecessary);
    observer.observe(props.botContainer, {
      subtree: false,
      childList: true,
    });
  });

  onCleanup(() => {
    if (observer) observer.disconnect();
  });

  return (
    <span
      class="w-full text-center px-[10px] pt-[6px] pb-[10px] m-auto text-[13px]"
      style={{
        color: props.poweredByTextColor ?? defaultTextColor,
        'background-color': props.badgeBackgroundColor ?? '#ffffff',
      }}
    >
      Powered by
      <a
        href={'https://mishu.my/'}
        target="_blank"
        rel="noopener noreferrer"
        class="lite-badge"
        id="lite-badge"
        style={{ color: props.poweredByTextColor ?? defaultTextColor }}
      >
        <span style={{ 'font-weight': 'bold' }}> MISHU AI</span>
      </a>
      <br />
      <span style={{ 'font-size': '11px', color: disclaimerColor }}> Maya is learning and improving. She aims to be accurate but please verify for accuracy.</span>
    </span>
  );
};
