<?php
/**
 * Plugin Name: TheAIbet Media Network — Publication Taxonomy
 * Description: Registers the `publication` taxonomy + REST filter + article meta
 *              fields used by the headless frontends. Install as an mu-plugin:
 *              wp-content/mu-plugins/publication-taxonomy.php
 */

// 1. Publication taxonomy — one WordPress, five publications.
add_action('init', function () {
    register_taxonomy('publication', 'post', [
        'label'             => 'Publication',
        'public'            => true,
        'hierarchical'      => false,
        'show_in_rest'      => true,
        'rest_base'         => 'publication',
    ]);

    // Term slugs MUST match the frontend SITE keys:
    foreach ([
        'aflreviews'       => 'AFL Reviews',
        'ufcreview'        => 'UFC Review',
        'puntersreview'    => 'Punters Review',
        'sportinformation' => 'Sport Information',
        'punterstory'      => 'Punter Story',
    ] as $slug => $name) {
        if (!term_exists($slug, 'publication')) {
            wp_insert_term($name, 'publication', ['slug' => $slug]);
        }
    }
});

// 2. Allow ?publication_slug=aflreviews on /wp-json/wp/v2/posts
add_filter('rest_post_query', function ($args, $request) {
    $slug = $request->get_param('publication_slug');
    if ($slug) {
        $args['tax_query'][] = [
            'taxonomy' => 'publication',
            'field'    => 'slug',
            'terms'    => sanitize_key($slug),
        ];
    }
    return $args;
}, 10, 2);

// 3. Article meta consumed by the frontends (also definable via ACF instead).
add_action('init', function () {
    foreach ([
        'theaibet_path'      => 'Relevant TheAIbet destination path, e.g. /ufc/ufc-330',
        'theaibet_cta_label' => 'Contextual CTA label',
        'master_story_id'    => 'Central newsroom master story ID',
        'seo_title'          => 'SEO title override',
        'seo_description'    => 'SEO description override',
    ] as $key => $desc) {
        register_post_meta('post', $key, [
            'type'         => 'string',
            'description'  => $desc,
            'single'       => true,
            'show_in_rest' => true,
        ]);
    }
});
